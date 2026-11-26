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

## 03 — المصنفات · `/portal/works`

![مرجع بصري لشاشة المصنفات](ui-inspiration/03-protected-works.png)

### Prompt

طوّر شاشة **المصنفات** الحالية في «إذن» لتصبح **Registry Ledger / Rights Catalog** واضحة وغنية بصريًا، مستلهمة من الصورة المرجعية المرفقة، مع الحفاظ على نفس الوظائف والبيانات الموجودة في المشروع.

استخدم الصورة المرجعية كـ **Visual Direction فقط**، ولا تنسخها حرفيًا.

#### الهدف

حوّل الشاشة من:

- عنوان
- بحث
- فلتر
- صف واحد
- مساحة بيضاء كبيرة

إلى:

**سجل حقوق تشغيلي منظم** يساعد صاحب الحق على:

- رؤية جميع المصنفات المرتبطة به.
- معرفة حالة كل مصنف.
- رؤية آخر نشاط مرتبط به.
- الوصول إلى التفاصيل بسرعة.
- فهم مصدر التسجيل وحالة البيانات.

---

#### 1. Header / Hero

احتفظ بعنوان: **المصنفات**

والوصف: **الصور والمحتوى المرتبط بسجل حقوقك.**

أضف Visual Header خفيف يحتوي على:

- soft lavender atmosphere
- layered image/content motif
- خطوط Verification / Registry خفيفة
- geometry مستوحاة من هوية «إذن»

الأبيض يبقى الأساس.

---

#### 2. Summary

إذا كانت البيانات الحالية تدعم counts حقيقية، أضف ملخصًا صغيرًا مثل:

- إجمالي المصنفات
- مكتملة
- قيد التسجيل / تحتاج استكمال

لا تضف أرقامًا وهمية.

إذا لم تكن counts متاحة من Service Layer، لا تخترعها.

تجنب KPI cards التقليدية قدر الإمكان؛ استخدم summary blocks خفيفة ومتكاملة مع الصفحة.

---

#### 3. Search & Filters

حسّن منطقة البحث والتصفية بحيث تكون compact وواضحة.

استخدم فقط الفلاتر المدعومة حاليًا، مثل:

- البحث بالاسم أو معرف التسجيل
- حالة التسجيل

يمكن إضافة:

- sort by latest activity
- list/grid toggle

فقط إذا كانت الوظيفة والبيانات تدعم ذلك بالفعل.

---

#### 4. Registry Ledger Rows

حوّل كل مصنف إلى Row غني بدل صف نصي بسيط.

كل row يمكن أن يتضمن:

- thumbnail واضحة
- اسم المصنف
- registration/reference ID
- مصدر التسجيل
- حالة التسجيل
- آخر نشاط مرتبط
- آخر تحديث / تاريخ
- CTA:
  - عرض التفاصيل
  - استكمال التسجيل، إذا كان هذا state موجودًا فعليًا

لا تضف Actions غير موجودة في Sources.

---

#### 5. Visual Hierarchy

اجعل أهم العناصر بالترتيب:

1. الصورة
2. اسم المصنف
3. حالة التسجيل
4. مصدر التسجيل
5. آخر نشاط
6. الإجراءات

استخدم:

- strong typography
- subtle borders
- small provenance icons
- semantic status cues
- thin structural separators

---

#### 6. Status Design

اعرض حالات التسجيل بصريًا باستخدام:

- icon
- label
- subtle semantic color

مثل:

- مكتمل
- قيد التسجيل
- يحتاج استكمال

لكن لا تعتمد على اللون وحده.

ولا تكثر من pills.

---

#### 7. Visual Density

المشكلة الحالية الرئيسية هي الفراغ الكبير.

قلل الإحساس بالفراغ عبر:

- ledger rows أكثر وضوحًا
- metadata
- thumbnails
- structured header
- summary
- filters
- subtle background linework
- light lavender zones

لا تضف بيانات مزيفة فقط لملء الشاشة.

إذا كانت البيانات الحالية تحتوي على مصنف واحد فقط، صمّم الـlayout بحيث يدعم عدة مصنفات مستقبلاً بدون اختراع entries جديدة.

---

#### 8. لغة «إذن» البصرية

استخدم:

- Royal Purple
- Soft Lavender
- Content Layers
- Registry / Verification linework
- thin geometric frames
- subtle depth
- provenance/source icons

تجنب:

- generic SaaS table
- blank white canvas
- heavy cards
- neon
- random gradient blobs
- glassmorphism مبالغ

---

#### 9. النصوص

راجع النصوص لتكون واضحة.

لا تكتفِ بمصطلحات مثل:

**المصنف**

**التسجيل**

**السجل**

بدون سياق.

استخدم helper text عند الحاجة مثل: **الصور والمحتوى المرتبط بسجل حقوقك.**

حافظ على المصطلحات القانونية المعتمدة، لكن اجعلها مفهومة للمستخدم.

---

#### 10. Responsive

Desktop:

- ledger واسع
- الفلاتر واضحة
- الصور والmetadata تستفيد من المساحة

Mobile:

- كل مصنف يتحول إلى compact stacked entry
- الصورة تبقى واضحة
- الحالة ظاهرة
- CTA واضح
- metadata تختصر بذكاء
- لا horizontal overflow

---

#### 11. Motion

استخدم motion خفيف فقط:

- hover/focus
- filter changes
- opening work details
- transition من row إلى Work Details عند الإمكان

احترم: `prefers-reduced-motion`

---

#### 12. لا تغيّر المنطق

لا تضف:

- registry truth جديدة
- legal conclusions
- authorization logic
- new registration workflow غير موجود
- fake activity

الواجهة فقط تعرض بيانات Service Layer الحالية.

بعد التنفيذ:

- شغّل build
- lint
- typecheck
- tests
- visual QA

ثم أعطني Closure Report مختصر يتضمن:

- كيف تحولت الشاشة إلى Registry Ledger
- كيف قللت الفراغ الأبيض
- ما الذي تغير في الـhierarchy
- ما الذي تغير في النصوص
- كيف استخدمت الصور والmetadata
- نتائج الاختبارات
