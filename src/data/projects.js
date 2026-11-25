// أضيفي أي عمل جديد كعنصر داخل المصفوفة، وسيظهر تلقائياً في صفحة الأعمال.
// الأنواع المتاحة: مقال، ملخص كتاب، محتوى تسويقي، منشور اجتماعي.
const projectEntries = [
  {
    id: "slow-progress",
    type: "مقال",
    category: "تطوير ذاتي",
    title: "عن التقدّم البطيء الذي لا نراه",
    excerpt:
      "ليس كل ما ينمو يعلن عن نفسه. أحياناً يكون التقدّم الحقيقي هادئاً، متعثراً، لكنه يحدث.",
    readTime: "٥ دقائق",
    featured: true,
    number: "01",
    body: "ننتظر لحظات كبيرة كي نصدق أننا نتغير: قرار حاسم، بداية جديدة، أو نتيجة يلاحظها الجميع. لكن أكثر التحولات صدقاً تبدأ في التفاصيل الصغيرة؛ في مرة نختار فيها أن نحاول مجدداً، أو في يوم نعامل فيه أنفسنا برفق أكبر.\n\nالتقدّم لا يسير دائماً بخط مستقيم. قد نعود إلى نقطة ظننا أننا تجاوزناها، ثم نكتشف أننا نراها الآن بعين مختلفة. وهذا أيضاً شكل من أشكال النمو. لا تقيسي رحلتك بسرعة الآخرين؛ انتبهي فقط إلى المسافة التي قطعتها أنتِ.",
  },
  {
    id: "atomic-habits",
    type: "ملخص كتاب",
    category: "كتب وأفكار",
    title: "العادات الذرية: أثر الخطوات الصغيرة",
    excerpt:
      "أفكار عملية من كتاب جيمس كلير عن بناء العادات التي تستمر، ولماذا يتفوّق التغيير البسيط على الحماس المؤقت.",
    readTime: "٤ دقائق",
    featured: true,
    number: "02",
    body: "الفكرة المركزية في كتاب «العادات الذرية» لجيمس كلير هي أن التغييرات الصغيرة، حين تتكرر، تصنع فرقاً كبيراً مع الوقت. بدلاً من التركيز على الهدف النهائي وحده، يقترح الكتاب أن نبني نظاماً يومياً يساعدنا على الاقتراب منه.\n\nمن أكثر الأدوات العملية وضوحاً: اجعلي العادة الجديدة ظاهرة، جذابة، سهلة، ومُرضية. ابدئي بخطوة صغيرة جداً، واربطِيها بسلوك موجود بالفعل. لا تحتاجين إلى تغيير حياتك في يوم واحد؛ تحتاجين إلى بيئة تسهّل عليكِ تكرار ما تريدين أن تصبحي عليه.\n\nهذا الملخص يشارك أبرز الأفكار، ولا يغني عن قراءة الكتاب كاملاً والاستفادة من أمثلته.",
  },
  {
    id: "brand-voice",
    type: "محتوى تسويقي",
    category: "كتابة للعلامات التجارية",
    title: "صوت العلامة التجارية يبدأ من الإصغاء",
    excerpt:
      "نص تعريفي يشرح كيف تتحول قيمة العلامة التجارية إلى لغة يشعر بها العميل في كل رسالة.",
    readTime: "نموذج كتابة",
    featured: true,
    number: "03",
    body: "قبل أن نختار الكلمات، علينا أن نعرف لمن نتحدث. ما الذي يشغل عميلك؟ ما الأسئلة التي يتردد في طرحها؟ وما الذي يجعله يثق بك؟\n\nصوت العلامة التجارية ليس مجموعة أوصاف جميلة، بل طريقة ثابتة في الحديث والتعامل. حين نفهم الجمهور جيداً، تصبح الرسائل أبسط وأكثر صدقاً؛ فيعرف العميل ما الذي نقدمه، ولماذا قد يناسبه، وما الخطوة التالية.",
  },
  {
    id: "reading-notes",
    type: "ملخص كتاب",
    category: "كتب وأفكار",
    title: "كيف نقرأ كتاباً ونحتفظ بأفكاره؟",
    excerpt:
      "ملاحظات تأملية عن القراءة بوصفها حواراً مستمراً، لا سباقاً لإنهاء الصفحات.",
    readTime: "٣ دقائق",
    featured: false,
    number: "04",
    body: "أحياناً ننهي كتاباً جميلاً ثم نشعر أن أفكاره ابتعدت عنا. ربما لأن القراءة لم تمنحنا وقتاً لنتوقف ونسأل: ماذا تعني هذه الفكرة لي؟\n\nاختاري جملة واحدة أثارت فضولك، اكتبي بجوارها سؤالاً، ثم عودي إليها بعد أيام. لا تحتاجين إلى تلخيص كل صفحة؛ يكفي أن تتركي لنفسك أثراً صغيراً يساعد الفكرة على البقاء.",
  },
  {
    id: "small-joys",
    type: "منشور اجتماعي",
    category: "حياة يومية",
    title: "تفاصيل صغيرة تستحق أن نلاحظها",
    excerpt:
      "مجموعة منشورات قصيرة تلتقط لحظات عادية وتحوّلها إلى مساحة للامتنان والتأمل.",
    readTime: "سلسلة منشورات",
    featured: false,
    number: "05",
    body: "ليس كل يوم بحاجة إلى إنجاز كبير كي يكون جميلاً. أحياناً يكفي كوب قهوة هادئ، مكالمة مع شخص نحبه، أو دقائق بلا استعجال.\n\nما التفصيلة الصغيرة التي جعلت يومك ألطف؟",
  },
  {
    id: "clear-words",
    type: "مقال",
    category: "كتابة وتواصل",
    title: "الكتابة الواضحة احترام لوقت القارئ",
    excerpt:
      "لماذا تكون الجملة الأبسط أحياناً أكثر إقناعاً، وكيف نراجع النص لنصل إلى المعنى بسرعة.",
    readTime: "٤ دقائق",
    featured: false,
    number: "06",
    body: "الكتابة الواضحة لا تعني أن تكون الفكرة سطحية. تعني أن نمنحها طريقاً سهلاً إلى القارئ. نراجع الجملة، نحذف ما لا يخدم معناها، ونختار كلمة مألوفة حين تؤدي الغرض.\n\nاسألي بعد كتابة كل فقرة: ما الفكرة الواحدة التي أريد أن تصل؟ إن احتاج القارئ إلى إعادة القراءة كي يفهمها، فهذه فرصة لتحسين النص.",
  },
  {
    id: "stationery-story",
    type: "محتوى تسويقي",
    category: "إعلانات تدريبية",
    title: "كل صفحة جديدة.. حكاية لسه هتتكتب!",
    excerpt:
      "إعلان لأدوات ورقية يربط بين القرطاسية وتنظيم الأفكار والبدايات الجديدة.",
    readTime: "منشور إعلاني",
    featured: false,
    number: "07",
    body: "كل صفحة جديدة.. حكاية لسه هتتكتب!\n\nبتحبي تكتبي خططك وأفكارك على الورق، ولا بتشتري نوت بوك جديد كل ما تبدأي مرحلة جديدة؟\n\nمن أول قائمة مهام الصبح، لحد أفكارك اللي بتيجي فجأة في نص اليوم.. هتلاقي عندنا الأدوات الورقية اللي تساعدك تجمعي أفكارك وتحوّليها لخطوات واضحة.\n\nنوت بوك لتخطيط يومك\nكراسات لتدوين أفكارك\nتفاصيل ورقية بسيطة تخلي هداياك أقرب للقلب\n\nمش مجرد ورق.. دي مساحة لأفكارك عشان تكبر.\n\nاختاري القطعة اللي تشبهك، وابدئي اكتبي حكايتك!\n\n#قرطاسية #أدوات_ورقية #تنظيم_اليوم #الكتابة",
  },
  {
    id: "step-planner",
    type: "محتوى تسويقي",
    category: "إعلانات تدريبية",
    title: "مفكرة «خطوة» — طريقك للإنجاز",
    excerpt:
      "إعلان لمفكرة عملية يساعد على تنظيم المهام وترتيب الأولويات وتقليل التشتت.",
    readTime: "منشور إعلاني",
    featured: false,
    number: "08",
    body: "بتسوّف مهامك؟ وبتنسى حاجات مهمة وسط زحمة يومك؟\n\nمحتاج مهامك تبقى منظمة ومكتوبة قدام عينيك؟\n\nمفكرة «خطوة» هتساعدك ترتّب أولوياتك وتتابع إنجازك.\n\nومع «خطوة»، هتلاقي قلم تحديد هدية يساعدك تميّز أولوياتك، بالإضافة إلى حجمها العملي اللي يخليك تاخد مفكرتك معاك في أي مكان.\n\nرتّب مهامك، وقلّل تشتتك، وابدأ مع «خطوة».\n\nاطلبها الآن!",
  },
  {
    id: "reset-course",
    type: "محتوى تسويقي",
    category: "إعلانات تدريبية",
    title: "دورة «ضبط مصنع» — بداية جديدة لقلبك",
    excerpt:
      "نموذج إعلاني افتراضي لدورة توعوية، بصياغة وجدانية تدعو لمراجعة العلاقة بالعبادة.",
    readTime: "نموذج تدريبي",
    featured: false,
    number: "09",
    body: "حاسس إن زحمة الدنيا أبعدتك عن السكينة في الصلاة؟ وبقيت تقرأ القرآن من غير ما تحس بتدبّره وقربه؟\n\nأحيانًا بنحتاج نقف ونراجع نفسنا، ونبدأ من جديد. زي ما بنعمل إعادة ضبط للموبايل لما يهنّج، القلب كمان محتاج وقفة صادقة.\n\nدورة «ضبط مصنع» مع الشيخ علاء بتساعدك تراجع طريقك وتبدأ من جديد، وتعبد الله على بصيرة.\n\nضبط مصنع… بداية جديدة لقلبك.\n\nنموذج تدريبي افتراضي.",
  },
  {
    id: "strength-within-review",
    type: "مقال",
    category: "مراجعة كتاب",
    title: "مراجعة كتاب: القوة في داخلك",
    excerpt:
      "تأمل في أثر كتب التنمية البشرية، والتعبير عن المشاعر والعبارات التأكيدية والغفران.",
    readTime: "مراجعة قصيرة",
    featured: false,
    number: "10",
    body: "على عكس كثيرين، أرى أن لكتب التنمية البشرية فائدة، قليلة كانت أو كبيرة. أشعر أنني أخرج من الكتاب مختلفة قليلًا؛ أكتسب مفردات جديدة، وأعيد التفكير في بعض أفكاري ومشاعري.\n\nفي كتاب «القوة في داخلك» توقفت عند فكرة التعبير عن المشاعر السلبية بدل كبتها، والتساؤل عن أثر العبارات التأكيدية، ثم إفساح المجال للحب والغفران.\n\nوتبقى أسئلة تستحق النقاش: كيف نعبّر عن مشاعرنا بطريقة صحية؟ وهل تساعدنا العبارات التأكيدية على تغيير نظرتنا لأنفسنا؟ وهل نستطيع أن نختار الغفران دون إنكار الألم؟\n\nهل قرأت الكتاب؟ ما الفكرة التي بقيت معك؟",
  },
  {
    id: "routine-not-so-bad",
    type: "مقال",
    category: "تطوير ذاتي",
    title: "الروتين ليس بهذا السوء",
    excerpt:
      "مقال رأي يرى في الروتين أحياناً مصدراً للراحة وتنظيم اليوم والاحتفاء بالإنجاز الصغير.",
    readTime: "مقال قصير",
    featured: false,
    number: "11",
    body: "سمعنا كتير عن كسر الروتين والتغيير، وعن ارتباط الروتين بالملل. لكن من وجهة نظري، الروتين مش دايمًا ممل؛ ممكن يكون مريح ويخفف الضغط، لأنه بيساعدنا نعرف أولوياتنا وننظم يومنا.\n\nحددي أهدافك الأول، وبعدها رتّبي مهامك اليومية على أساسها. ومع مرور الأيام، استمتعي بالإنجازات الصغيرة اللي بتشوفي أثرها.\n\nأنا عندي مهام بتتكرر كل يوم وده نوع من الروتين، لكني بحس بالحماس كل ما أنجزها وأشوف تقدمي.\n\nوأنتِ، الروتين بالنسبة لكِ ملل ولا راحة؟",
  },
  {
    id: "self-learning",
    type: "مقال",
    category: "تطوير ذاتي",
    title: "التعليم الذاتي",
    excerpt:
      "نص عن التعلم المستمر بوصفه وسيلة لاكتساب المهارات والاستعداد للفرص والتحديات.",
    readTime: "مقال قصير",
    featured: false,
    number: "12",
    body: "التعليم الذاتي هو سلاحي؛ لذلك أحرص على تطوير نفسي واكتساب المهارات التي تساعدني على النجاح.\n\nفالنجاح لا يقتصر على ما نتعلمه داخل الصفوف الدراسية؛ فالتعلم المستمر يساعدنا على توسيع معرفتنا والاستعداد لتحديات الحياة والعمل.\n\nمن خلال التعليم الذاتي أتعلم ما أحتاج إليه، وأوسّع معرفتي، وأعمل على تحسين نقاط ضعفي، لأكون أكثر استعدادًا للفرص والتحديات القادمة.\n\nوأنتِ، ما المهارة التي تعملين على تطويرها الآن؟",
  },
  {
    id: "happiness",
    type: "مقال",
    category: "تأملات",
    title: "السعادة",
    excerpt:
      "تأمل في اختلاف معنى السعادة، وفي تقدير لحظاتها بعيداً عن انتظار حياة مثالية.",
    readTime: "مقال قصير",
    featured: false,
    number: "13",
    body: "من منا لا يبحث عن السعادة؟ منا من يراها في العلاقات، ومنا من يجدها في الوحدة، ومنا من يربطها بالنجاح أو الرضا أو تحقيق الأحلام.\n\nنلمح السعادة في أوقات مختلفة، ونظل نأمل أن نعيشها من جديد. وربما لا نعرف قيمتها كاملة إلا حين نمرّ بالحزن ونشتاق إلى ما يبعث الطمأنينة في قلوبنا.\n\nلكن هل يمكن أن نعيش السعادة طوال الوقت؟ لا أظن أن الحياة تخلو من الحزن أو النقص؛ ربما تكون السعادة في أن نلاحظ لحظاتها ونقدّرها، وأن نواصل البحث عنها دون انتظار حياة مثالية.\n\nوأنتِ، كيف ترين السعادة؟ وما الذي يساعدك على الاقتراب منها؟",
  },
  {
    id: "fear-and-boundaries",
    type: "كتابة تأملية",
    category: "تأملات شخصية",
    title: "الخوف",
    excerpt:
      "نص عن الخوف من الجديد والبحث عن الأمان وبناء حدود تحمي القلب دون أن تغلقه.",
    readTime: "نص تأملي",
    featured: false,
    number: "14",
    body: "أخاف من كل شيء جديد، ومن كل شخص لا أعرفه. أحيانًا أتجنب الألم حتى لو كان ثمن ذلك أن أبتعد عن الناس. رأيت ما يكفي من الخذلان والواقع القاسي، فهل ليس من حقي أن أبحث عن الأمان؟\n\nلكنني أخاف أيضًا أن أعلّق شعوري بالأمان على شخص أو شيء، لذلك أضع حدودًا واضحة وأتمنى أن يحترمها من أتعامل معهم.\n\nأعرف أن الإنسان يحتاج إلى دعم من حوله، لكنني أدرك كذلك أن لا أحد يستطيع أن يمنحنا كل ما نحتاج إليه.\n\nربما أتعلم أن أحمي قلبي بحدود متوازنة، من غير أن أغلقه أمام كل جديد.\n\nوأنتِ، كيف توازنين بين حماية نفسك والانفتاح على الآخرين؟",
  },
];

const projectPhotos = {
  "slow-progress": {
    image:
      "https://images.unsplash.com/photo-1721846636979-ae9fe6cedd33?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "امرأة تسير على طريق في حديقة",
    photoCredit: "Krišjānis Kazaks",
    photoSource:
      "https://unsplash.com/photos/a-woman-walking-down-a-path-in-a-park-zLMnTzcaiGk",
  },
  "atomic-habits": {
    image:
      "https://images.unsplash.com/photo-1761058556617-ddd0f3b9795e?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "تقويم مكتبي بجانب مجموعة كتب",
    photoCredit: "Yaqing Wei",
    photoSource:
      "https://unsplash.com/photos/a-small-desk-calendar-sits-beside-a-stack-of-books-211NmLyOzYU",
  },
  "brand-voice": {
    image:
      "https://images.unsplash.com/photo-1743796055651-41c743ff2465?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "عمل على الحاسوب والكتابة في دفتر",
    photoCredit: "MJ Duford",
    photoSource:
      "https://unsplash.com/photos/person-is-working-on-a-laptop-and-writing-in-a-notebook-45u1mboQtQE",
  },
  "reading-notes": {
    image:
      "https://images.unsplash.com/photo-1762335986639-eb84a5cdd0e7?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "قراءة كتاب مع فنجان قهوة وقلم",
    photoCredit: "Esra Afşar",
    photoSource:
      "https://unsplash.com/photos/person-reading-a-book-with-coffee-and-pen-49gK-U7FMzw",
  },
  "small-joys": {
    image:
      "https://images.unsplash.com/photo-1683371648073-4e45d021d194?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "قهوة وكتاب مفتوح على طاولة",
    photoCredit: "Sina Salehian",
    photoSource:
      "https://unsplash.com/photos/a-cup-of-coffee-sitting-on-top-of-a-table-next-to-an-open-book-F9kQFdizpTM",
  },
  "clear-words": {
    image:
      "https://images.unsplash.com/photo-1731963094554-c5c981ccdefd?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "يد تكتب بقلم في دفتر",
    photoCredit: "nedimshoots",
    photoSource:
      "https://unsplash.com/photos/a-person-writing-on-a-notebook-with-a-pen-6CQy1skIbRs",
  },
  "stationery-story": {
    image:
      "https://images.unsplash.com/photo-1698434156091-05773f7a3cb5?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "أدوات كتابة ودفتر على مكتب",
    photoCredit: "Kelly Sikkema",
    photoSource:
      "https://unsplash.com/photos/a-person-holding-a-pen-and-writing-on-a-notebook-05RTFIYfgNc",
  },
  "step-planner": {
    image:
      "https://images.unsplash.com/photo-1676287569661-5f2836a91c64?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "دفتر تخطيط وقلم على مكتب",
    photoCredit: "Walls.io",
    photoSource:
      "https://unsplash.com/photos/a-spiral-notebook-with-a-notepad-and-pen-on-top-of-it-VGAl6JCHlTY",
  },
  "reset-course": {
    image:
      "https://images.unsplash.com/photo-1547413749-3e0c1ba70695?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "شخص يقرأ كتاباً بهدوء",
    photoCredit: "lilartsy",
    photoSource: "https://unsplash.com/photos/person-reading-book-zlFOerO7xeE",
  },
  "strength-within-review": {
    image:
      "https://images.unsplash.com/photo-1424115087662-5845efc6b366?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "قراءة بين مجموعة من الكتب",
    photoCredit: "Gaelle Marcel",
    photoSource:
      "https://unsplash.com/photos/person-sitting-on-stack-of-books-while-reading-L8SNwGUNqbU",
  },
  "routine-not-so-bad": {
    image:
      "https://images.unsplash.com/photo-1692158962119-8103c7d78c86?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "دفتر وقلم لتسجيل الخطط والمهام",
    photoCredit: "My Profit Tutor",
    photoSource:
      "https://unsplash.com/photos/a-notebook-with-a-pen-on-top-of-it-v30bSAWzp4I",
  },
  "self-learning": {
    image:
      "https://images.unsplash.com/photo-1759984782211-3a02ca78e6ac?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "طالبة تذاكر وتكتب ملاحظات أمام حاسوب",
    photoCredit: "Julio Lopez",
    photoSource:
      "https://unsplash.com/photos/a-young-woman-studying-and-writing-notes-at-a-desk-Juj-Mi2b0DA",
  },
  happiness: {
    image:
      "https://images.unsplash.com/photo-1747256561857-4369b87e0337?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "امرأة تبتسم في الهواء الطلق",
    photoCredit: "Finn Mund",
    photoSource:
      "https://unsplash.com/photos/a-young-woman-smiles-outdoors-looking-happily-HFNpfDsnjJ4",
  },
  "fear-and-boundaries": {
    image:
      "https://images.unsplash.com/photo-1692933216024-8de20c41321a?auto=format&fit=crop&w=1000&q=82",
    imageAlt: "امرأة تسير في طريق بين الحقول",
    photoCredit: "Nathan Mullet",
    photoSource:
      "https://unsplash.com/photos/a-woman-walking-down-a-path-through-a-lush-green-field-dHZ1RSMncoY",
  },
};

export const projects = projectEntries.map((project) => ({
  ...project,
  ...projectPhotos[project.id],
}));
export const categories = [
  "الكل",
  ...new Set(projects.map((project) => project.type)),
];
