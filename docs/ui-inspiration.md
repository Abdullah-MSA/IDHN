# مراجع تحسين واجهات «إذن»

تُضاف المراجع حسب ترتيب إرسالها. يبدأ التنفيذ عند طلب المستخدم «نفّذ».

## 01 — تسجيل الدخول · `/login`

![مرجع بصري لشاشة تسجيل الدخول](ui-inspiration/01-login.png)

### Prompt

Design a refined high-fidelity Arabic RTL web login page concept for the platform "إذن". Keep the same overall product identity and purpose, but improve the current screen substantially so it feels polished, premium, and production-ready. The page should be a desktop UI mockup with a very clean modern layout, subtle visual richness, and better composition than the current version.

Style and art direction:

- Elegant Arabic SaaS / government-tech interface
- Minimal and clean, but not empty or plain
- White is the main base color, supported by very light lavender and soft purple accents
- Add subtle background treatments: faint gradient glow, delicate line-work, soft geometric framing, and very light decorative strokes so the page feels designed, not like a plain document
- Premium, calm, trustworthy, modern
- Soft shadows, gentle borders, tasteful depth
- High readability and polished spacing

Layout:

- RTL Arabic interface
- Top navigation/header with the "إذن" logo on the right and a small breadcrumb or section label on the left
- Main hero/login card centered in a large elegant panel
- Two-column composition inside the main card:
  1) Right side: login content
  2) Left side: visual illustration / abstract brand scene

Login content requirements:

- Large Arabic heading: "تسجيل الدخول"
- Supporting text explaining that the user enters email and password to access the workspace
- Real login form fields, not just a CTA:
  - email field labeled "البريد الإلكتروني"
  - password field labeled "كلمة المرور"
- Password visibility icon inside the password field
- Primary button: "تسجيل الدخول"
- Small supporting secure-login note below
- Make the content feel complete and realistic, not empty

Illustration / visual area:

- Use an abstract branded composition inspired by layered translucent panels/cards with a small central identity symbol
- Soft purple tones, subtle line passing through the composition, and elegant depth
- Keep it visually premium and cohesive with the product identity
- It should enhance the page without overpowering the login form

Bottom information strip:

- Inside the same card, add three concise feature/value blocks with small icons:
  - "التحقق من الهوية" with a short subtitle like "دخول موثوق"
  - "تحديد الصلاحيات" with a short subtitle like "حسب دور الحساب"
  - "فتح مساحة العمل" with a short subtitle like "إجراءات المراجعة قبل النشر"
- These should look well structured and beautifully integrated

Important improvements:

- Make the page more visually rich than the current design while preserving simplicity
- Fix the feeling of emptiness by improving composition, hierarchy, decorative details, and section balance
- Ensure the result feels like a real polished website screen, not a wireframe
- Keep Arabic typography strong and elegant
- Ensure the screen looks like a realistic final UI mockup that can be handed to a developer

Output:

- Single static UI mockup
- High fidelity
- Desktop aspect ratio
- Clean Arabic typography
- No watermarks

### ملاحظة للتنفيذ لاحقًا

الصورة مرجع بصري. يظل الدور آتيًا من جلسة المصادقة وفق متطلبات المشروع. تخضع وظائف تذكّر الدخول واستعادة كلمة المرور لعقد المصادقة المعتمد.

## 02 — التنبيهات · `/portal/notifications`

![مرجع بصري لشاشة التنبيهات](ui-inspiration/02-notifications.png)

### Prompt

طوّر شاشة **التنبيهات** الحالية في «إذن» بناءً على نفس الوظائف والبيانات الموجودة، لكن ارفعها بصريًا وتجريبيًا لتصبح أقرب لواجهة Product حقيقية، لا مجرد بطاقة واحدة داخل مساحة بيضاء كبيرة.

استخدم الصورة المرجعية المرفقة كـ **Visual Direction فقط**، لا تنسخها حرفيًا.

#### الهدف

حوّل الشاشة من:

- عنوان
- بطاقة تنبيه واحدة
- فراغ أبيض كبير

إلى: **Operational Notifications Inbox**

تسمح لصاحب الحق بفهم:

- ما الذي حدث؟
- أي صورة أو مصنف مرتبط؟
- ما حالة التنبيه؟
- هل يحتاج إجراء؟
- متى حدث؟
- ما الخطوة التالية؟

---

#### 1. Header / Hero

احتفظ بعنوان: **التنبيهات**

وتحته وصف واضح مثل: **تابع التنبيهات المرتبطة بصورك والمصنفات التي تحتاج انتباهك.**

أضف خلفية بصرية خفيفة جدًا:

- soft lavender field
- verification trace lines
- layered identity geometry
- bell / event motif خفيف

الأبيض يبقى الأساس.

---

#### 2. قائمة التنبيهات

لا تعرض التنبيه كـstrip طويل فقط.

استخدم قائمة متعددة الصفوف أو البطاقات التشغيلية بحيث يحتوي كل تنبيه على:

- thumbnail للصورة إن كانت متاحة
- عنوان التنبيه
- وصف مختصر للسبب
- اسم السوق أو المصدر
- معرف التحقق / المصنف عند الحاجة
- الوقت
- حالة التنبيه
- CTA واضح

مثال للحالة المهمة:

**محاولة استخدام تحتاج مراجعة**

وصف: **وجد النظام تشابهًا بصريًا مع صورة مرتبطة بسجل حقوقك، ولم يُحسم وجود إذن مسجل للبائع.**

الإجراء: **عرض تفاصيل التحقق**

---

#### 3. حالات التنبيه

اعرض الحالات بصريًا، لكن لا تعتمد على اللون فقط.

مثل:

- يحتاج مراجعة
- مكتمل
- معلومة
- مقروء / غير مقروء

استخدم:

- icon
- label
- subtle color
- typography hierarchy

ولا تستخدم pills كثيرة بلا داعٍ.

---

#### 4. Filters

أضف منطقة تصفية خفيفة ومفيدة، مثل:

- الحالة
- الفترة الزمنية
- unread/read عند الحاجة

يفضل أن تكون compact ولا تستهلك الشاشة.

لا تضف filters غير مدعومة بالبيانات الحالية.

---

#### 5. Visual Density

المشكلة الحالية هي الفراغ الكبير.

حلها عن طريق:

- قائمة أكثر كثافة
- توزيع أفضل للمحتوى
- contextual side filter أو top filter
- thumbnails
- metadata
- subtle background structure

لا تضف بيانات وهمية فقط لملء الشاشة.

إذا كانت البيانات الحالية تحتوي تنبيهًا واحدًا فقط، حافظ على نفس البيانات، لكن صمّم الـlayout بحيث يدعم قائمة متعددة مستقبلاً.

---

#### 6. Visual Language

استخدم لغة «إذن»:

- Royal Purple accents
- soft lavender
- verification lines
- small decision nodes
- thin structural borders
- provenance icons
- layered geometry

تجنب:

- generic SaaS cards
- heavy gradients
- random blobs
- neon
- glassmorphism مبالغ

---

#### 7. النصوص

راجع النصوص لتكون مفهومة لشخص غير تقني.

لا تكتب فقط: **محاولة استخدام تحتاج مراجعة**

بل وضح السبب في سطر ثانٍ.

لا تستخدم:

- مصطلحات داخلية
- jargon
- wording يوحي بحكم قانوني قطعي

---

#### 8. Responsive

على Desktop:

- يمكن استخدام sidebar/filter rail أو toolbar
- القائمة تستفيد من العرض

على Mobile:

- تتحول التنبيهات إلى stacked rows/cards
- الصورة تبقى مرئية
- CTA واضح
- metadata تختصر بذكاء
- لا horizontal overflow

---

#### 9. Motion

استخدم فقط microinteractions خفيفة:

- unread → read
- opening details
- filter transition
- hover/focus

احترم reduced motion.

---

#### 10. لا تغيّر الوظيفة

لا تضف:

- backend logic
- notification policy
- legal logic
- new actions غير موجودة في Sources

التعديل المطلوب بصري وتجريبي فقط.

بعد التنفيذ:

- شغّل build
- lint
- typecheck
- tests
- visual QA

ثم أعطني Closure Report مختصر يتضمن:

- ما الذي تغير بصريًا
- ما الذي تغير في النصوص
- كيف قللت الفراغ الأبيض
- كيف حسّنت قابلية قراءة التنبيهات
