import { Camera, ImagePlus, PackageOpen, UserRound, ScanLine, CircleCheck, Layers3, LoaderCircle, LogOut } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { VerificationDecision } from './domain';
import { ServiceError } from './services/contracts';
import { createMarketplaceHttpService, createMarketplaceMockService, type MarketplaceSellerContext, type MarketplaceService } from './services/marketplace';
import { currentScenario } from './services/mock';
import { getLocalUser } from './services/local-auth';
import { developmentFixtures } from './services/runtime';
import { outcomes } from './services/scenarios';
import { Decision, ErrorState, Pending, useSession, useSignOut } from './ui';

const messages: Record<VerificationDecision, string> = {
  allow: 'اكتمل التحقق ويمكن للسوق متابعة النشر.',
  review: 'تحتاج الصورة إلى مراجعة. انتظر نتيجة المراجعة قبل متابعة النشر.',
  hold_for_review: 'النشر معلّق لحين مراجعة الحالة.',
};
const accepted = ['image/jpeg', 'image/png', 'image/webp'];
const endpoint = import.meta.env.VITE_MARKETPLACE_ANALYZE_URL;
const contextEndpoint = import.meta.env.VITE_MARKETPLACE_SESSION_URL;
const sellerLogin = import.meta.env.VITE_MARKETPLACE_LOGIN_URL;
const nextPublish = import.meta.env.VITE_MARKETPLACE_PUBLISH_URL;

const service = endpoint
  ? createMarketplaceHttpService(new URL(endpoint, location.origin), contextEndpoint ? new URL(contextEndpoint, location.origin) : undefined)
  : import.meta.env.DEV ? createMarketplaceMockService(async () => {
    if (getLocalUser()?.role !== 'seller') throw new ServiceError('expired');
    const scenario = currentScenario();
    if (scenario === 'backend_error') throw new ServiceError('unavailable');
    return { decision: outcomes[scenario].decision };
  }) : null;

export function Marketplace() {
  const session = useSession();
  const logout = useSignOut();
  const localSellerRequired = developmentFixtures || (import.meta.env.DEV && !endpoint);
  const seller = useQuery({
    queryKey: ['marketplace-seller', session.data?.id],
    enabled: Boolean(service) && (!localSellerRequired || session.data?.role === 'seller'),
    queryFn: ({ signal }) => service?.getSellerContext(signal) ?? Promise.resolve(null),
  });
  return <>
    <header className="market-header"><div><PackageOpen size={22} aria-hidden="true" /> <span>مساحة البائع</span><small>إدارة المنتجات</small>
      {session.data && (localSellerRequired || session.data.role === 'seller') && <button className="icon-button market-logout" aria-label="تسجيل الخروج" disabled={logout.isPending} onClick={() => logout.mutate()}><LogOut size={19} aria-hidden="true" /></button>}
    </div></header>
    <main className="workspace market">
      <h1>إضافة صورة المنتج</h1>
      <p>تخضع صورة المنتج للتحقق قبل متابعة نشره.</p>
      {logout.isError && <ErrorState error={logout.error} />}
      {localSellerRequired && session.isPending ? <Pending />
        : localSellerRequired && session.isError ? <ErrorState error={session.error} retry={() => void session.refetch()} />
        : localSellerRequired && !session.data ? <section className="state"><UserRound aria-hidden="true" /><p>سجّل الدخول إلى حساب البائع للمتابعة.</p><Link className="button" to="/login">تسجيل الدخول</Link></section>
        : localSellerRequired && session.data?.role !== 'seller' ? <ErrorState error={new ServiceError('denied')} />
        : !service ? <p role="status">تعذّر بدء التحقق. أعد فتح المنتج من حسابك في السوق.</p>
        : seller.isPending ? <Pending />
        : seller.isError ? <ErrorState error={seller.error} retry={() => void seller.refetch()} />
        : seller.data ? <MarketplaceProduct service={service} seller={seller.data} />
        : <section className="state"><UserRound aria-hidden="true" /><p>سجّل الدخول إلى حسابك في السوق للمتابعة.</p>
          {sellerLogin && <a className="button" href={sellerLogin}>تسجيل الدخول إلى السوق</a>}</section>}
    </main>
  </>;
}

function MarketplaceProduct({ service, seller }: { service: MarketplaceService; seller: MarketplaceSellerContext }) {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<{ file: File; url: string }>();
  const [validatedImage, setValidatedImage] = useState<File>();
  const [title, setTitle] = useState(seller.productTitle ?? '');
  const [status, setStatus] = useState<'idle' | 'checking' | 'complete' | 'failed'>('idle');
  const [decision, setDecision] = useState<VerificationDecision | null>(null);
  const [fileError, setFileError] = useState('');
  const [error, setError] = useState<unknown>(null);
  const [dragging, setDragging] = useState(false);
  const request = useRef<AbortController | null>(null);
  const resultPanel = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!image) return;
    const url = URL.createObjectURL(image);
    setPreview({ file: image, url });
    return () => URL.revokeObjectURL(url);
  }, [image]);
  useEffect(() => () => request.current?.abort(), []);
  useEffect(() => {
    if (status === 'complete') resultPanel.current?.scrollIntoView({ block: 'nearest' });
  }, [status]);

  function select(file?: File) {
    if (request.current) return;
    setStatus('idle');
    setValidatedImage(undefined);
    setFileError('');
    setError(null);
    if (file && (!accepted.includes(file.type) || file.size === 0)) {
      setFileError('تعذّر استخدام هذا الملف. اختر صورة JPG أو PNG أو WebP.');
      setImage(undefined);
      return;
    }
    setImage(file);
  }

  async function verify() {
    if (!image || validatedImage !== image || !title.trim() || !service || request.current) return;
    const controller = new AbortController();
    request.current = controller;
    setStatus('checking');
    setError(null);
    try {
      const result = await service.verifyBeforePublish(image, controller.signal);
      if (controller.signal.aborted) return;
      setDecision(result.decision);
      setStatus('complete');
    } catch (error) {
      if (controller.signal.aborted) return;
      setError(error);
      setStatus('failed');
    } finally {
      if (request.current === controller) request.current = null;
    }
  }

  const checking = status === 'checking';
  const phase = status === 'complete' ? 2 : status === 'idle' ? 0 : 1;
  return <div className="market-layout">
      <form className="market-form" onSubmit={event => { event.preventDefault(); void verify(); }}>
        <div className="market-form-heading"><h2>{seller.productTitle ? 'تعديل المنتج' : 'إعداد المنتج'}</h2><span><Layers3 size={18} aria-hidden="true" /> بيانات المنتج</span></div>
        <fieldset disabled={checking}>
          <label className="field">اسم المنتج<input value={title} onChange={event => { setTitle(event.target.value); setStatus('idle'); }} required /></label>
          <div className="drop-area" data-dragging={dragging} onDragOver={event => { event.preventDefault(); setDragging(!checking); }} onDragLeave={() => setDragging(false)}
            onDrop={event => { event.preventDefault(); setDragging(false); select(event.dataTransfer.files[0]); }}>
            {image && preview?.file === image ? <figure><img src={preview.url} alt="معاينة صورة المنتج" onLoad={() => setValidatedImage(image)} onError={() => {
              select();
              setFileError('تعذّر قراءة الصورة. اختر ملف صورة صالحًا.');
            }} /><figcaption><bdi>{image.name}</bdi></figcaption></figure> : <><ImagePlus size={32} aria-hidden="true" /><p>اسحب صورة المنتج إلى هنا</p></>}
            <div className="market-actions">
              <label className="button secondary file-action">{image ? 'استبدال الصورة' : 'اختر صورة'}<input type="file" aria-label="اختيار ملف الصورة" accept={accepted.join(',')} onChange={event => { select(event.target.files?.[0]); event.target.value = ''; }} /></label>
              <label className="button secondary file-action"><Camera size={18} aria-hidden="true" /> التقاط صورة<input type="file" aria-label="التقاط صورة بالكاميرا" accept="image/*" capture="environment" onChange={event => { select(event.target.files?.[0]); event.target.value = ''; }} /></label>
              {image && <button type="button" className="button secondary" onClick={() => select()}>إزالة الصورة</button>}
            </div>
          </div>
        </fieldset>
        {fileError && <p role="alert">{fileError}</p>}
        {error instanceof ServiceError && error.kind === 'expired'
          ? <div className="state" role="alert">انتهت جلسة السوق. {sellerLogin && <a className="button secondary" href={sellerLogin}>سجّل الدخول إلى السوق</a>}</div>
          : error != null && <ErrorState error={error} />}
        <button type="submit" className="button" disabled={!image || validatedImage !== image || !title.trim() || !service || checking || status === 'complete'}>
          {checking ? 'جارٍ رفع الصورة والتحقق منها' : status === 'failed' ? 'إعادة التحقق' : 'التحقق ومتابعة النشر'}
        </button>
      </form>
      <aside className="market-verification" aria-labelledby="market-verification-title">
        <header className="market-verification-head">
          <div className="market-provider-mark"><img src="/media/mark.svg" alt="" /></div>
          <div><span>قبل النشر</span><h2 id="market-verification-title">التحقق من حقوق الصورة بواسطة إذن</h2></div>
        </header>
        <ol className="market-trace" aria-label="مراحل التحقق">
          {[
            { label: 'صورة المنتج', icon: Layers3 },
            { label: 'التحقق', icon: ScanLine },
            { label: 'النتيجة', icon: CircleCheck },
          ].map(({ label, icon: Icon }, index) => <li key={label} aria-current={index === phase ? 'step' : undefined} data-complete={index < phase}>
            <span><Icon size={18} aria-hidden="true" /></span>{label}
          </li>)}
        </ol>
        {status === 'idle' && <p className="market-verification-note">تبدأ «إذن» التحقق عند الضغط على «التحقق ومتابعة النشر».</p>}
        {checking && <div className="state loading" role="status"><LoaderCircle size={20} aria-hidden="true" />
          <p><strong>جارٍ التحقق من الصورة</strong><br />النشر متوقف حتى تصل نتيجة التحقق.</p>
        </div>}
        {status === 'failed' && <p className="market-verification-note">لم تصل نتيجة للتحقق. أعد المحاولة قبل النشر.</p>}
        {status === 'complete' && <section ref={resultPanel} className="market-result" role="status"><Decision value={decision} /><p>{decision ? messages[decision] : 'لم تكتمل عملية التحقق. يبقى النشر متوقفًا.'}</p>
          {decision === 'allow' && nextPublish && <a className="button" href={nextPublish}>متابعة النشر في السوق</a>}
        </section>}
      </aside>
    </div>;
}
