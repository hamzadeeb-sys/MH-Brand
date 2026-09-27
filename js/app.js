/* ===================================================
   MH Brand - Core Engine (Bilingual & Strict Customizer)
   =================================================== */

const MH_CONFIG = {
  whatsappNumber: "963900000000", // ضع رقمك بالصيغة الدولية هنا
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

    // Stepper & Headings
    cust_label: "تجربة التخصيص",
    cust_title: "صمّم صندوق مفاجأتك",
    step1_tab: "الحجم والطابع",
    step2_tab: "المستلم وتفاصيله",
    step3_tab: "المناسبة",
    step4_tab: "الإضافات والكرت",
    step5_tab: "مراجعة وتأكيد",
    btn_continue: "متابعة ←",
    btn_back: "← رجوع",
    btn_edit: "← تعديل البيانات",
    btn_confirm_capture: "تأكيد وحفظ الطلب كصورة ومتابعة عبر واتساب",

    // Step 1
    box_size_title: "1. اختر حجم وفئة الصندوق",
    box_size_sub: "حدد الباقة المناسبة لميزانيتك وعدد الهدايا المتضمنة.",
    tier_starter_badge: "2 - 3 هدايا",
    tier_starter_title: "باقة 25$",
    tier_starter_desc: "هدايا لطيفة رمزية وأنيقة",
    tier_classic_badge: "3 - 6 هدايا",
    tier_classic_title: "باقة 50$",
    tier_classic_desc: "تشكيلة مميزة الأكثر طلباً",
    tier_premium_badge: "6 - 9 هدايا",
    tier_premium_title: "باقة 75$",
    tier_premium_desc: "مفاجآت راقية ذات قيمة عالية",
    tier_deluxe_badge: "9 - 12 هدية",
    tier_deluxe_title: "باقة 100$",
    tier_deluxe_desc: "صندوق فاخر متكامل وتفاصيل مميزة",
    tier_executive_badge: "12 - 18 هدية",
    tier_executive_title: "باقة 150$",
    tier_executive_desc: "تجربة ملكية فارهة بمحتوى ضخم",
    tier_royal_badge: "18 - 24 هدية",
    tier_royal_title: "باقة 200$",
    tier_royal_desc: "القمة في الفخامة والقطع الثمينة",

    vibe_title_1: "طابع الهدايا (الفئة الأولى: القيمة والوزن)",
    vibe1_opt1_title: "هدايا خفيفة",
    vibe1_opt1_desc: "بين 3$ إلى 10$ للقطعة الواحدة",
    vibe1_opt2_title: "هدايا ثقيلة",
    vibe1_opt2_desc: "أكثر من 10$ للقطعة الواحدة",
    vibe1_opt3_title: "هدايا مختلطة",
    vibe1_opt3_desc: "توليفة تجمع بين الخفيفة والثقيلة",

    vibe_title_2: "طابع الهدايا (الفئة الثانية: النمط والغرابة)",
    vibe2_opt1_title: "هدايا مألوفة",
    vibe2_opt1_desc: "خيارات كلاسيكية مضمونة وراقية",
    vibe2_opt2_title: "هدايا مجنونة وغريبة",
    vibe2_opt2_desc: "أفكار فريدة وصادمة خارج الصندوق",
    vibe2_opt3_title: "مختلطة (مألوفة + غريبة)",
    vibe2_opt3_desc: "توازن ممتع بين الكلاسيكي والمفاجئ",

    // Step 2
    cust_s1_title: "2. لمن هذا الصندوق؟",
    cust_s1_desc: "اختر صلة القرابة أو المعرفة لتخصيص محتوى الهدية بدقة.",
    rel_spouse: "زوج / زوجة",
    rel_spouse_desc: "لشريك العمر",
    rel_fiance: "خطيب / خطيبة",
    rel_fiance_desc: "لبداية رحلة العمر",
    rel_bride: "عروس",
    rel_bride_desc: "تهنئة ملكية بالزفاف",
    rel_friend: "صديق / صديقة",
    rel_friend_desc: "لرفقة العمر والذكريات",
    rel_sibling: "أخ / أخت",
    rel_sibling_desc: "للسند والأقرب للقلب",
    rel_parent: "أب أو أم",
    rel_parent_desc: "لأغلى الناس وأعظمهم",
    rel_child: "ابن / ابنة",
    rel_child_desc: "لأجمل فرحة",
    rel_grandparent: "جد / جدة",
    rel_grandparent_desc: "لبركة العائلة",
    rel_colleague: "زميل عمل",
    rel_colleague_desc: "تقدير ومودة مهنية",
    rel_teacher: "معلم",
    rel_teacher_desc: "عرفان بالفضل والعطاء",
    rel_manager: "صاحب عمل",
    rel_manager_desc: "احترام وتقدير مهني",
    rel_special: "شخص مميز",
    rel_special_desc: "لمن يحتل مكانة استثنائية",
    recip_sub_details: "تفاصيل المستلم الدقيقة",
    lbl_gender: "الجنس",
    opt_select_gender: "-- اختر الجنس --",
    gender_female: "أنثى (Female)",
    gender_male: "ذكر (Male)",
    lbl_age: "العمر التقريبي",
    ph_age: "مثلاً: 24",
    lbl_fav_color: "اللون المفضل للمستلم",
    ph_fav_color: "مثلاً: أسود، بنفسجي، أزرق نيلي...",
    lbl_interests_avoid: "اهتمامات المستلم أو محظورات يجب تجنبها ضمن الصندوق",
    ph_interests_avoid: "مثلاً: يحب القراءة والقهوة / تجنب العطور لوجود حساسية...",

    // Step 3
    cust_s2_title: "3. ما هي المناسبة؟",
    cust_s2_desc: "اختر المناسبة ليتم مواءمة التغليف ورسالة الإهداء والمفاجآت معها.",
    occ_birthday: "عيد ميلاد",
    occ_birthday_desc: "سنة جديدة مليئة بالفرح",
    occ_valentines: "عيد حب",
    occ_valentines_desc: "تعبير رقيق عن المشاعر",
    occ_wedding_anniv: "ذكرى زواج",
    occ_wedding_anniv_desc: "تخليد لأجمل رباط",
    occ_rel_anniv: "ذكرى ارتباط",
    occ_rel_anniv_desc: "احتفال ببدء الحكاية",
    occ_engagement: "خطوبة",
    occ_engagement_desc: "مباركة بالخطوة الأولى",
    occ_wedding: "زفاف",
    occ_wedding_desc: "فخامة تليق باليوم الكبير",
    occ_graduation: "تخرج",
    occ_graduation_desc: "تتويج سنوات التعب",
    occ_success: "نجاح",
    occ_success_desc: "فرحة إنجاز مستحق",
    occ_promotion: "وظيفة أو ترقية",
    occ_promotion_desc: "انطلاقة مهنية جديدة",
    occ_mothers_day: "عيد الأم",
    occ_mothers_day_desc: "لأغلى قلب بالوجود",
    occ_fathers_day: "عيد الأب",
    occ_fathers_day_desc: "لسند الحياة والقدوة",
    occ_ramadan: "رمضان",
    occ_ramadan_desc: "أجواء دافئة وهدايا أصيلة",
    occ_newborn: "مولود جديد",
    occ_newborn_desc: "مباركة بقدوم الفرح",
    occ_getwell: "سلامتك",
    occ_getwell_desc: "حمد لله على السلامة أو عودة سفر",
    occ_gratitude: "شكر وامتنان",
    occ_gratitude_desc: "تقدير صادق لجهد أو موقف",
    occ_apology: "اعتذار",
    occ_apology_desc: "تطييب خاطر بأسلوب راقٍ",
    occ_justbecause: "بدون مناسبة",
    occ_justbecause_desc: "مفاجأة عفوية تصنع اليوم",
    occ_other: "مناسبة خاصة",
    occ_other_desc: "اكتب تفاصيلها بالملاحظات",

    // Step 4
    step4_addons_title: "4. الإضافات وبطاقة الإهداء",
    step4_addons_sub: "اختر الإضافات الخاصة ثم اكتب رسالة الصندوق.",
    addon_card_title: "بطاقة إهداء يدوية (+1$)",
    addon_card_desc: "كتابة رسالتك بخط يد فاخر على كرت أنيق",
    addon_photo_title: "صورة تذكارية (+3$)",
    addon_photo_desc: "طباعة صورة شخصية عالية الجودة داخل الغطاء",
    addon_perfume_title: "تعطير الصندوق (+5$)",
    addon_perfume_desc: "تفوح منه رائحة زكية استثنائية فور فتحه",
    addon_ribbon_title: "شريط إهداء بالاسم (+2$)",
    addon_ribbon_desc: "شريط ستان فاخر مطبوع باسم المستلم",
    addon_wax_title: "ختم شمعي أحمر (+4$)",
    addon_wax_desc: "ختم شمعي رسمي يعطي طابع الفخامة الملكية",
    addon_personal_title: "هدية خاصة منك (+0$)",
    addon_personal_desc: "ترسل لنا غرضاً أو هدية منك لنضعها داخل الصندوق",
    lbl_recip_name: "اسم مستلم الصندوق",
    ph_recip_name: "أدخل اسم الشخص الذي سيتلقى الهدية...",
    lbl_card_msg: "نص رسالة الإهداء للبطاقة",
    ph_card_msg: "اكتب الكلمات الخاصة التي تريد أن نضعها داخل البطاقة...",
    lbl_extra_notes: "ملاحظات أخيرة خاصة بالطلب (إن وجدت)",
    ph_extra_notes: "إذا اخترت (مناسبة خاصة) أو لديك أي تفصيل تحب أن نراعيه...",

    // Step 5 Review
    cust_s5_title: "5. مراجعة تفاصيل الصندوق وتأكيده",
    cust_s5_desc: "اضغط على زر التأكيد ليتم حفظ كرت الطلب لديك وفتح المحادثة معنا مباشرة.",
    sum_lbl_tier: "فئة وميزانية الصندوق:",
    sum_lbl_vibe1: "طابع الهدايا (القيمة):",
    sum_lbl_vibe2: "طابع الهدايا (النمط):",
    sum_lbl_relation: "صلة القرابة / المستلم:",
    sum_lbl_gender_age: "الجنس والعمر:",
    sum_lbl_color: "اللون المفضل:",
    sum_lbl_interests: "الاهتمامات والمحظورات:",
    sum_lbl_occasion: "المناسبة:",
    sum_lbl_addons: "الإضافات الخاصة:",
    sum_lbl_name: "اسم المستلم:",
    sum_lbl_msg: "رسالة الإهداء:",
    sum_lbl_notes: "ملاحظات العميل:",
    sum_lbl_total: "المجموع النهائي للصندوق:",

    // Alerts
    alert_step1: "يرجى اختيار باقة الصندوق وطابع الهدايا أولاً للاستمرار.",
    alert_step2: "يرجى تحديد لمن هذا الصندوق للاستمرار.",
    alert_step3: "يرجى اختيار المناسبة للاستمرار.",
    btn_processing: "جاري حفظ كرت الطلب وتجهيز الواتساب..."
  },

  en: {
    nav_home: "HOME",
    nav_boxes: "BOXES",
    nav_customize: "CUSTOMIZE",
    nav_about: "ABOUT",
    nav_contact: "CONTACT",
    lang_btn: "عربي",
    footer_surprise_slogan: "LET US SURPRISE YOU",
    footer_rights: "© 2026 MH Brand. All Rights Reserved.",

    // Stepper & Headings
    cust_label: "CUSTOM EXPERIENCE",
    cust_title: "CUSTOMIZE YOUR BOX",
    step1_tab: "TIER & VIBE",
    step2_tab: "RECIPIENT",
    step3_tab: "OCCASION",
    step4_tab: "ADD-ONS & CARD",
    step5_tab: "REVIEW & CONFIRM",
    btn_continue: "CONTINUE →",
    btn_back: "← BACK",
    btn_edit: "← EDIT DETAILS",
    btn_confirm_capture: "CONFIRM & SAVE RECEIPT TO WHATSAPP",

    // Step 1
    box_size_title: "1. Select Box Tier & Budget",
    box_size_sub: "Choose the package tailored to your budget and items count.",
    tier_starter_badge: "2 - 3 Gifts",
    tier_starter_title: "Starter $25",
    tier_starter_desc: "Subtle, symbolic, and elegant tokens",
    tier_classic_badge: "3 - 6 Gifts",
    tier_classic_title: "Classic $50",
    tier_classic_desc: "Our most popular signature ensemble",
    tier_premium_badge: "6 - 9 Gifts",
    tier_premium_title: "Premium $75",
    tier_premium_desc: "Refined items with distinguished value",
    tier_deluxe_badge: "9 - 12 Gifts",
    tier_deluxe_title: "Deluxe $100",
    tier_deluxe_desc: "A fully curated royal experience",
    tier_executive_badge: "12 - 18 Gifts",
    tier_executive_title: "Executive $150",
    tier_executive_desc: "Opulent presentation with extensive gifts",
    tier_royal_badge: "18 - 24 Gifts",
    tier_royal_title: "Royal $200",
    tier_royal_desc: "Peak bespoke luxury and exclusive pieces",

    vibe_title_1: "Gift Vibe (Category 1: Value & Weight)",
    vibe1_opt1_title: "Light Gifts",
    vibe1_opt1_desc: "Between $3 to $10 per piece",
    vibe1_opt2_title: "Heavy Gifts",
    vibe1_opt2_desc: "Over $10 per piece",
    vibe1_opt3_title: "Mixed Gifts",
    vibe1_opt3_desc: "Balanced mix of light and heavy items",

    vibe_title_2: "Gift Vibe (Category 2: Style & Uniqueness)",
    vibe2_opt1_title: "Familiar Gifts",
    vibe2_opt1_desc: "Reliable classic aesthetics",
    vibe2_opt2_title: "Crazy & Unusual",
    vibe2_opt2_desc: "Unique, surprising, out-of-the-box items",
    vibe2_opt3_title: "Mixed (Familiar + Unusual)",
    vibe2_opt3_desc: "An exciting balance of classic & daring",

    // Step 2
    cust_s1_title: "2. Who is this box for?",
    cust_s1_desc: "Select the relationship to tailor the gift curation perfectly.",
    rel_spouse: "Spouse",
    rel_spouse_desc: "For your partner in life",
    rel_fiance: "Fiancé",
    rel_fiance_desc: "Celebrating a new beginning",
    rel_bride: "Bride",
    rel_bride_desc: "Royal wedding congratulations",
    rel_friend: "Friend",
    rel_friend_desc: "Honoring true lasting bonds",
    rel_sibling: "Sibling",
    rel_sibling_desc: "To your closest ally",
    rel_parent: "Parent",
    rel_parent_desc: "For our dearest and greatest",
    rel_child: "Son / Daughter",
    rel_child_desc: "For the purest joy",
    rel_grandparent: "Grandparent",
    rel_grandparent_desc: "The blessing of family",
    rel_colleague: "Colleague",
    rel_colleague_desc: "Professional appreciation",
    rel_teacher: "Teacher / Mentor",
    rel_teacher_desc: "Gratitude for dedication",
    rel_manager: "Business Owner / Boss",
    rel_manager_desc: "Respect & professional tribute",
    rel_special: "Special Person",
    rel_special_desc: "For an extraordinary soul",
    recip_sub_details: "Recipient Precise Details",
    lbl_gender: "Gender",
    opt_select_gender: "-- Select Gender --",
    gender_female: "Female",
    gender_male: "Male",
    lbl_age: "Approximate Age",
    ph_age: "e.g. 24",
    lbl_fav_color: "Recipient's Favorite Color",
    ph_fav_color: "e.g. Matte Black, Indigo Blue...",
    lbl_interests_avoid: "Interests & Things to Avoid",
    ph_interests_avoid: "e.g. Loves espresso and reading / Avoid perfumes due to allergies...",

    // Step 3
    cust_s2_title: "3. What's the occasion?",
    cust_s2_desc: "Match the wrapping, card aesthetic, and surprises to the celebration.",
    occ_birthday: "Birthday",
    occ_birthday_desc: "Another joyful milestone",
    occ_valentines: "Valentine's",
    occ_valentines_desc: "Pure affection & romance",
    occ_wedding_anniv: "Wedding Anniversary",
    occ_wedding_anniv_desc: "Cherishing timeless love",
    occ_rel_anniv: "Relationship Milestone",
    occ_rel_anniv_desc: "Celebrating the beginning",
    occ_engagement: "Engagement",
    occ_engagement_desc: "Congratulations on the first step",
    occ_wedding: "Wedding",
    occ_wedding_desc: "Grand elegance for the big day",
    occ_graduation: "Graduation",
    occ_graduation_desc: "Rewarding hard work & triumph",
    occ_success: "Success / Milestone",
    occ_success_desc: "Celebrating achievements",
    occ_promotion: "New Job / Promotion",
    occ_promotion_desc: "A fresh career milestone",
    occ_mothers_day: "Mother's Day",
    occ_mothers_day_desc: "To the most precious heart",
    occ_fathers_day: "Father's Day",
    occ_fathers_day_desc: "To life's foundation & role model",
    occ_ramadan: "Ramadan",
    occ_ramadan_desc: "Warm vibes and authentic gifts",
    occ_newborn: "Newborn Baby",
    occ_newborn_desc: "Welcoming new blessings",
    occ_getwell: "Get Well Soon",
    occ_getwell_desc: "Speedy recovery or warm welcome back",
    occ_gratitude: "Gratitude & Thanks",
    occ_gratitude_desc: "Heartfelt sincere appreciation",
    occ_apology: "Apology",
    occ_apology_desc: "Making amends with supreme taste",
    occ_justbecause: "Just Because",
    occ_justbecause_desc: "A spontaneous surprise to make their day",
    occ_other: "Special Occasion",
    occ_other_desc: "Detail it in the special notes below",

    // Step 4
    step4_addons_title: "4. Add-ons & Gift Message",
    step4_addons_sub: "Choose special touches and write your personal note.",
    addon_card_title: "Handwritten Card (+1$)",
    addon_card_desc: "Calligraphy handwritten note on luxury paper",
    addon_photo_title: "Keepsake Photo (+3$)",
    addon_photo_desc: "High-resolution photo framed inside the lid",
    addon_perfume_title: "Box Perfuming (+5$)",
    addon_perfume_desc: "Captivating aroma diffused upon unboxing",
    addon_ribbon_title: "Custom Name Ribbon (+2$)",
    addon_ribbon_desc: "Satin ribbon printed with the recipient's name",
    addon_wax_title: "Royal Wax Seal (+4$)",
    addon_wax_desc: "Authentic wax seal imparting royal distinction",
    addon_personal_title: "Personal Gift from You (+0$)",
    addon_personal_desc: "Send us an item to be tucked inside the box",
    lbl_recip_name: "Recipient Name",
    ph_recip_name: "Enter the recipient's name...",
    lbl_card_msg: "Gift Card Note",
    ph_card_msg: "Write the words you want placed inside the card...",
    lbl_extra_notes: "Additional Notes (Optional)",
    ph_extra_notes: "If you selected 'Special Occasion' or have specific requests...",

    // Step 5 Review
    cust_s5_title: "5. Review & Confirm Your Box",
    cust_s5_desc: "Click confirm to save the official receipt and open WhatsApp directly.",
    sum_lbl_tier: "Box Tier & Budget:",
    sum_lbl_vibe1: "Gift Vibe (Value):",
    sum_lbl_vibe2: "Gift Vibe (Style):",
    sum_lbl_relation: "Recipient Relation:",
    sum_lbl_gender_age: "Gender & Age:",
    sum_lbl_color: "Favorite Color:",
    sum_lbl_interests: "Interests & Things to Avoid:",
    sum_lbl_occasion: "Occasion:",
    sum_lbl_addons: "Selected Add-ons:",
    sum_lbl_name: "Recipient Name:",
    sum_lbl_msg: "Card Note:",
    sum_lbl_notes: "Customer Notes:",
    sum_lbl_total: "Final Total Amount:",

    // Alerts
    alert_step1: "Please select a Box Tier and both Gift Vibes to continue.",
    alert_step2: "Please select who this box is for to continue.",
    alert_step3: "Please choose an occasion to continue.",
    btn_processing: "Saving order card & connecting to WhatsApp..."
  }
};

const AppEngine = {
  lang: localStorage.getItem("mh_lang") || "ar",

  init() {
    this.applyLanguage(this.lang);
    this.bindGlobalEvents();
  },

  applyLanguage(lang) {
    this.lang = lang;
    localStorage.setItem("mh_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (I18N_DATA[lang] && I18N_DATA[lang][key]) {
        el.innerText = I18N_DATA[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const key = el.getAttribute("data-i18n-ph");
      if (I18N_DATA[lang] && I18N_DATA[lang][key]) {
        el.setAttribute("placeholder", I18N_DATA[lang][key]);
      }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.innerText = I18N_DATA[lang].lang_btn;
    });

    if (document.querySelector(".step-view[data-step='5'].active")) {
      updateReviewDisplay();
    }
  },

  toggleLanguage() {
    this.applyLanguage(this.lang === "ar" ? "en" : "ar");
  },

  bindGlobalEvents() {
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => this.toggleLanguage());
    });

    const hamburger = document.getElementById("hamburgerBtn");
    const menu = document.getElementById("navMenu");
    if (hamburger && menu) {
      hamburger.addEventListener("click", () => menu.classList.toggle("open"));
    }

    // إدارة التحديد اليدوي (بدون أي قيمة افتراضية مسبقة)
    document.querySelectorAll(".custom-options-grid, .grid-3-cols").forEach(grid => {
      const isMulti = grid.hasAttribute("data-multi");
      grid.querySelectorAll(".option-box").forEach(box => {
        box.addEventListener("click", () => {
          if (!isMulti) {
            grid.querySelectorAll(".option-box").forEach(b => b.classList.remove("selected"));
            box.classList.add("selected");
          } else {
            box.classList.toggle("selected");
          }
        });
      });
    });
  }
};

function collectCustomBoxData() {
  const isEn = AppEngine.lang === "en";
  const selectedTier = document.querySelector("#boxTierGrid .option-box.selected");
  const basePrice = selectedTier ? parseFloat(selectedTier.getAttribute("data-price")) : 0;
  const tierName = selectedTier 
    ? selectedTier.querySelector("h4").innerText + " (" + selectedTier.querySelector(".tier-badge").innerText + ")" 
    : (isEn ? "Not Selected" : "لم يتم التحديد");

  const vibe1 = document.querySelector("#vibeTier1Grid .option-box.selected h4")?.innerText || (isEn ? "Not Selected" : "لم يتم التحديد");
  const vibe2 = document.querySelector("#vibeTier2Grid .option-box.selected h4")?.innerText || (isEn ? "Not Selected" : "لم يتم التحديد");

  const relation = document.querySelector("#recipientRelationGrid .option-box.selected h4")?.innerText || (isEn ? "Not Selected" : "لم يتم التحديد");
  const genderEl = document.getElementById("recipGenderSelect");
  const gender = (genderEl && genderEl.selectedIndex > 0) ? genderEl.options[genderEl.selectedIndex].text : (isEn ? "Not Specified" : "لم يحدد");
  const age = document.getElementById("recipAgeInput")?.value || (isEn ? "Not Specified" : "غير محدد");
  const favColor = document.getElementById("recipFavColorInput")?.value || (isEn ? "Not Specified" : "غير محدد");
  const interests = document.getElementById("recipInterestsInput")?.value || (isEn ? "None" : "لا يوجد");

  const occasion = document.querySelector("#occasionGrid .option-box.selected h4")?.innerText || (isEn ? "Not Selected" : "لم يتم التحديد");

  let addonsPrice = 0;
  const addons = [];
  document.querySelectorAll("#addonsGrid .option-box.selected").forEach(el => {
    addonsPrice += parseFloat(el.getAttribute("data-price") || 0);
    addons.push(el.querySelector("h4").innerText);
  });

  const recipName = document.getElementById("recipNameInput")?.value || (isEn ? "Anonymous" : "بدون اسم");
  const cardMsg = document.getElementById("giftCardMsgInput")?.value || (isEn ? "No card note" : "لا توجد رسالة");
  const extraNotes = document.getElementById("extraNotesInput")?.value || (isEn ? "None" : "لا توجد ملاحظات");

  const totalPrice = basePrice + addonsPrice;

  return {
    tierSelected: !!selectedTier,
    vibe1Selected: !!document.querySelector("#vibeTier1Grid .option-box.selected"),
    vibe2Selected: !!document.querySelector("#vibeTier2Grid .option-box.selected"),
    relationSelected: !!document.querySelector("#recipientRelationGrid .option-box.selected"),
    occasionSelected: !!document.querySelector("#occasionGrid .option-box.selected"),
    tierName,
    vibe1,
    vibe2,
    relation,
    gender,
    age,
    favColor,
    interests,
    occasion,
    addons: addons.length > 0 ? addons.join(" + ") : (isEn ? "No special add-ons" : "بدون إضافات خاصة"),
    recipName,
    cardMsg,
    extraNotes,
    totalPrice
  };
}

function updateReviewDisplay() {
  const isEn = AppEngine.lang === "en";
  const data = collectCustomBoxData();
  const dateEl = document.getElementById("receiptDate");
  if (dateEl) dateEl.innerText = new Date().toLocaleDateString(isEn ? 'en-US' : 'ar-EG');

  document.getElementById("sumTier").innerText = data.tierName;
  document.getElementById("sumVibe1").innerText = data.vibe1;
  document.getElementById("sumVibe2").innerText = data.vibe2;
  document.getElementById("sumRelation").innerText = data.relation;
  document.getElementById("sumGenderAge").innerText = isEn ? `${data.gender} (Age: ${data.age})` : `${data.gender} (العمر: ${data.age})`;
  document.getElementById("sumColor").innerText = data.favColor;
  document.getElementById("sumInterests").innerText = data.interests;
  document.getElementById("sumOccasion").innerText = data.occasion;
  document.getElementById("sumAddons").innerText = data.addons;
  document.getElementById("sumName").innerText = data.recipName;
  document.getElementById("sumCardMsg").innerText = data.cardMsg;
  document.getElementById("sumExtraNotes").innerText = data.extraNotes;
  document.getElementById("sumFinalPrice").innerText = `$${data.totalPrice.toFixed(2)}`;
}

window.goToStep = function(stepNum) {
  const data = collectCustomBoxData();
  const lang = AppEngine.lang;

  if (stepNum > 1 && (!data.tierSelected || !data.vibe1Selected || !data.vibe2Selected)) {
    alert(I18N_DATA[lang].alert_step1);
    return;
  }
  if (stepNum > 2 && !data.relationSelected) {
    alert(I18N_DATA[lang].alert_step2);
    return;
  }
  if (stepNum > 3 && !data.occasionSelected) {
    alert(I18N_DATA[lang].alert_step3);
    return;
  }

  document.querySelectorAll(".step-view").forEach(v => {
    v.classList.toggle("active", parseInt(v.getAttribute("data-step")) === stepNum);
  });
  document.querySelectorAll(".stepper-btn").forEach(p => {
    p.classList.toggle("active", parseInt(p.getAttribute("data-step")) === stepNum);
  });

  if (stepNum === 5) {
    updateReviewDisplay();
  }
};

window.processOrderAndCapture = function() {
  const btn = document.getElementById("btnSubmitAndCapture");
  const lang = AppEngine.lang;
  const isEn = lang === "en";
  btn.innerText = I18N_DATA[lang].btn_processing;
  btn.disabled = true;

  const data = collectCustomBoxData();
  const receiptElement = document.getElementById("orderReceiptCapture");

  html2canvas(receiptElement, {
    scale: 2,
    backgroundColor: "#121214"
  }).then(canvas => {
    // 1. تنزيل الصورة
    const link = document.createElement("a");
    link.download = `MH-Order-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    // 2. نص الواتساب بالعربية أو الإنجليزية
    let waText = "";
    if (isEn) {
      waText = 
        `Hello MH Brand 👋\n` +
        `I would like to confirm my Mystery Box order:\n\n` +
        `📦 Tier & Budget: ${data.tierName}\n` +
        `⚖️ Value Vibe: ${data.vibe1}\n` +
        `🎭 Style Vibe: ${data.vibe2}\n` +
        `👤 Recipient: ${data.relation} (${data.gender} - Age: ${data.age})\n` +
        `🎨 Favorite Color: ${data.favColor}\n` +
        `📌 Interests & Exclusions: ${data.interests}\n` +
        `🎉 Occasion: ${data.occasion}\n` +
        `✨ Add-ons: ${data.addons}\n` +
        `🏷️ Recipient Name: ${data.recipName}\n` +
        `💌 Card Message: "${data.cardMsg}"\n` +
        `📝 Notes: ${data.extraNotes}\n\n` +
        `💰 Total Amount: $${data.totalPrice.toFixed(2)}\n\n` +
        `*(Attached receipt card just downloaded to verify details)*`;
    } else {
      waText = 
        `مرحباً MH Brand 👋\n` +
        `أود تأكيد طلب Mystery Box بالبيانات التالية:\n\n` +
        `📦 باقة الصندوق: ${data.tierName}\n` +
        `⚖️ طابع القيمة: ${data.vibe1}\n` +
        `🎭 نمط الهدايا: ${data.vibe2}\n` +
        `👤 المستلم: ${data.relation} (${data.gender} - العمر: ${data.age})\n` +
        `🎨 اللون المفضل: ${data.favColor}\n` +
        `📌 الاهتمامات والمحظورات: ${data.interests}\n` +
        `🎉 المناسبة: ${data.occasion}\n` +
        `✨ الإضافات: ${data.addons}\n` +
        `🏷️ اسم المستلم: ${data.recipName}\n` +
        `💌 رسالة الكرت: "${data.cardMsg}"\n` +
        `📝 ملاحظات: ${data.extraNotes}\n\n` +
        `💰 الإجمالي: $${data.totalPrice.toFixed(2)}\n\n` +
        `*(مرفق لحضرتكم صورة كرت الطلب المحفوظة للتو لتأكيد التفاصيل)*`;
    }

    // 3. فتح الواتساب
    setTimeout(() => {
      window.open(`https://wa.me/${MH_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`, "_blank");
      btn.innerText = I18N_DATA[lang].btn_confirm_capture;
      btn.disabled = false;
    }, 1000);
  }).catch(err => {
    console.error("Error generating receipt image:", err);
    btn.innerText = I18N_DATA[lang].btn_confirm_capture;
    btn.disabled = false;
  });
};

document.addEventListener("DOMContentLoaded", () => AppEngine.init());
