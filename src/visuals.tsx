import type { LucideIcon } from 'lucide-react';

export function LayerMotif({ icon: Icon, image = false }: { icon: LucideIcon; image?: boolean }) {
  return <div className={'layer-motif' + (image ? ' layer-motif-image' : '')} aria-hidden="true">
    <div className="motif-plane motif-back" />
    <div className="motif-plane motif-middle" />
    <div className="motif-plane motif-front">{image ? <img src="/media/ceramic.jpg" alt="" /> : <Icon size={35} />}</div>
    {image && <span className="motif-badge"><img src="/media/mark.svg" alt="" /></span>}
    <span className="motif-trace" />
  </div>;
}

export function WorkspaceBanner({ context, title, description, icon }: { context: string; title: string; description: string; icon: LucideIcon }) {
  return <header className="workspace-banner">
    <div className="workspace-banner-copy"><p className="context">{context}</p><h1>{title}</h1><p>{description}</p></div>
    <LayerMotif icon={icon} />
  </header>;
}
