/* ===================================================
   MH Brand - Master Engine
   =================================================== */

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// حماية الذاكرة المحلية لمنع توقف السكربت على الموبايل
const SafeStorage = {
  get(key, fallback = null) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (e) {
      return fallback;
    }
  },
  set(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {}
  }
};

const MH_CONFIG = {
  whatsappNumber: "963900000000",
  instagramUsername: "mh_brand"
};

const I18N_DATA = {
  ar: {
    nav_home: "الرئيسية",
    nav_boxes: "البوكسات",
    nav_customize: "تخصيص الصندوق",
    nav_about: "عن البراند",
    nav_contact: "تواصل معنا",
    lang_btn: "EN",
    footer_surprise_slogan: "اترك المفاجأة علينا",
    footer_rights: "جميع الحقوق محفوظة © 2026 MH Brand.",

    hero_tag: "أكثر من مجرد صندوق",
    hero_title: "صندوق. مفاجأة. لحظة لا تُنسى.",
    hero_desc: "نحوّل اللحظات العادية إلى ذكريات استثنائية عبر صناديق غامضة صُممت بعناية تامة وبأعلى درجات الفخامة.",
    hero_btn_discover: "استكشف البوكسات",
    hero_btn_customize: "صمّم صندوقك",
    concept_title: "اختر اللحظة. ونحن نصنع المفاجأة.",
    concept_desc: "صناديق مفاجآت مخصصة للكابلز، الأصدقاء، العائلة، ولكل مناسبة تستحق الاحتفال.",
    moments_label: "المناسبات",
    moments_title: "لكل لحظة خاصة",
    moment_couples: "الكابلز (Couples)",
    moment_couples_sub: "لحظات استثنائية تجمعكما معاً",
    moment_engagement: "الخطوبة (Engagement)",
    moment_engagement_sub: "بداية القصة والخطوة الأولى",
    moment_wedding: "الزواج (Wedding)",
    moment_wedding_sub: "فخامة تليق باليوم الكبير",
    moment_friends: "الأصدقاء (Friends)",
    moment_friends_sub: "تقدير حقيقي لرفقة تدوم",
    moment_birthday: "أعياد الميلاد (Birthday)",
    moment_birthday_sub: "مفاجأة مبهجة متجددة كل عام",
    moment_graduation: "التخرج (Graduation)",
    moment_graduation_sub: "تتويج مسيرة الجهد والنجاح",
    how_label: "الخطوات",
    how_title: "كيف نعمل",
    how_s1_title: "اختر",
    how_s1_desc: "اختر المناسبة ونوع الصندوق الأساسي الذي يناسبك.",
    how_s2_title: "خصّص",
    how_s2_desc: "حدد الهدايا الداخلية والإضافات والرسالة الشخصية.",
    how_s3_title: "فاجئ",
    how_s3_desc: "استلم البوكس المغلف بعناية وافتح باب الدهشة.",
    make_label: "تجربة مخصصة",
    make_title: "اصنعه بأسلوبك",
    make_desc: "صمّم صندوقك بالكامل من الصفر بدقة وانسيابية تامة.",
    make_btn: "تخصيص البوكس الآن ←",

    boxes_title: "صناديق المفاجآت",
    boxes_sub: "اكتشف صندوقاً صُمم خصيصاً لمناسبتك.",
    filter_all: "الكل",
    filter_couple: "كابلز",
    filter_fiance: "خطوبة",
    filter_friend: "أصدقاء",
    filter_birthday: "عيد ميلاد",
    filter_wedding: "زفاف",
    box_noir_title: "صندوق نوار الملكي",
    box_noir_desc: "مزيج ملكي من العطور الفاخرة، والإكسسوارات المصنوعة يدوياً.",
    box_suite_title: "جناح العروسين الفاخر",
    box_suite_desc: "تنسيق متكامل للعروسين بتغليف شمعي فاخر وبطاقة تهنئة.",
    box_milestone_title: "صندوق أعياد الميلاد والعائلة",
    box_milestone_desc: "صندوق مفاجآت يحمل هدايا مختارة بدقة تتناسب مع اهتمامات العائلة والأطفال.",
    box_bond_title: "صندوق الصداقة الدائمة",
    box_bond_desc: "هدية أنيقة ومفاجئة تعبّر عن الامتنان والرفقة الدائمة.",
    btn_add_cart: "إضافة للسلة",
    btn_view_details: "تخصيص البوكس",
    in_stock: "متوفر للطلب",

    about_label: "فلسفة البراند",
    about_title: "أكثر من مجرد صندوق.",
    about_desc: "تأسست MH حول فكرة واحدة بسيطة: تحويل اللحظات العادية إلى مفاجآت لا تُنسى تبقى في الذاكرة للأبد.",
    val_surprise_title: "الدهشة (SURPRISE)",
    val_surprise_desc: "عنصر الغموض والتشويق الراقي الذي يكسر رتابة الهدايا الكلاسيكية ويثير الفرح الحقيقي.",
    val_style_title: "الأناقة (STYLE)",
    val_style_desc: "تصميم عصري بسيط وخالٍ من التعقيد يعكس الحداثة والجاذبية بهدوء وثقة.",
    val_detail_title: "الدقة (DETAIL)",
    val_detail_desc: "من نوع خامة الصندوق ورائحة التغليف حتى الختم والخط، كل تفصيل ينال عناية فائقة.",
    val_moments_title: "اللحظات (MOMENTS)",
    val_moments_desc: "نحن لا نبيع مجرد منتج مغلف، بل نبتكر تجربة وجدانية تصنع ذكريات دائمة.",

    contact_label: "ابقَ على تواصل",
    contact_title: "دعنا نتحدث.",
    contact_desc: "نسعد بتلقي استفساراتك وطلباتك الخاصة مباشرة.",
    channel_wa: "واتساب",
    channel_insta: "إنستغرام",
    channel_email: "البريد الإلكتروني",
    field_name: "الاسم الكامل",
    field_name_ph: "أدخل اسمك الكريم",
    field_contact: "رقم الهاتف أو البريد الإلكتروني",
    field_contact_ph: "للتواصل معك",
    field_message: "نص الرسالة",
    field_message_ph: "كيف يمكننا مساعدتك؟",
    btn_send: "إرسال الرسالة",

    cust_label: "تجربة التخصيص",
    cust_title: "صمّم صندوق مفاجأتك",
    step1_tab: "الحجم والطابع",
    step2_tab: "المستلم وتفاصيله",
    step3_tab: "المناسبة",
    step4_tab: "الإضافات والكرت",
    step5_tab: "مراجعة وتأ
