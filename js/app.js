/* ===================================================
   MH Brand - Core Engine (i18n, Cart, Mystery Box Customizer)
   =================================================== */

const MH_CONFIG = {
  whatsappNumber: "963900000000", // استبدله برقمك بالصيغة الدولية بدون +
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
    
    // Customizer Stepper
    cust_label: "التجربة الأساسية",
    cust_title: "تخصيص صندوقك الخاص",
    step1_tab: "الحجم والنوع",
    step2_tab: "المستهدف",
    step3_tab: "المناسبة",
    step4_tab: "الإضافات والكرت",
    step5_tab: "المعاينة والطلب",
    
    // Step 1
    box_size_title: "1. اختر حجم وفئة الصندوق",
    box_size_sub: "كل حجم يتم تصميمه بعناية مع هدايا تناسب فئته ومساحته.",
    tier_special: "سبيشال بوكس (Special)",
    tier_special_desc: "الصندوق الأكبر والأفخم، يتسع لأكثر من 5 هدايا قيمة مع تنسيق ملكي.",
    tier_regular: "ريجيلار بوكس (Regular)",
    tier_regular_desc: "الحجم الأكثر طلباً، يتسع لـ 3 إلى 4 هدايا أساسية أنيقة.",
    tier_mini: "ميني بوكس (Mini)",
    tier_mini_desc: "حجم لطيف وموجز، مناسب للقطع الثمينة أو التذكارات الصغيرة.",
    box_experience_title: "طابع المفاجأة",
    exp_mystery: "غموض كامل (100% Mystery)",
    exp_mystery_desc: "فريقنا يختار محتويات الصندوق بعناية بناءً على المناسبة والشخص.",
    exp_curated: "كلاسيك نصف مخصص",
    exp_curated_desc: "تحديد نوع القطع مسبقاً مع مفاجآت تكميلية غير متوقعة.",
    btn_continue: "متابعة ←",
    btn_back: "← رجوع",

    // Step 2 & 3
    cust_s1_title: "2. لمن هذا الصندوق؟",
    cust_s1_desc: "حدد الشخص المستهدف لنخصص النمط الداخلي للهدية.",
    target_couple: "الكابلز (Couples)",
    target_couple_desc: "لشريك حياتك",
    target_fiance: "الخطيب / الخطيبة",
    target_fiance_desc: "لبداية قصة جديدة",
    target_friend: "صديق مقرب",
    target_friend_desc: "للأصدقاء والمقربين",
    target_family: "أفراد العائلة",
    target_family_desc: "للأهل والأقارب",
    target_parent: "الوالدين",
    target_parent_desc: "للأم أو الأب",
    target_kids: "الأطفال",
    target_kids_desc: "مفاجآت مرحة",
    cust_s2_title: "3. ما هي المناسبة؟",
    cust_s2_desc: "اختر المناسبة ليتم مواءمة التغليف ورسالة الإهداء والقطع معها.",
    occ_birthday: "عيد ميلاد",
    occ_birthday_desc: "سنة جديدة سعيدة",
    occ_graduation: "تخرج",
    occ_graduation_desc: "تتويج النجاح",
    occ_engagement: "خطوبة",
    occ_engagement_desc: "أجمل بداية",
    occ_wedding: "زفاف",
    occ_wedding_desc: "اليوم الكبير",
    occ_anniversary: "ذكرى سنوية",
    occ_anniversary_desc: "لحظات لا تنسى",
    occ_valentines: "يوم الحب",
    occ_valentines_desc: "تعبير راقٍ",
    occ_ramadan: "رمضان",
    occ_ramadan_desc: "أجواء مباركة",
    occ_justbecause: "بدون مناسبة",
    occ_justbecause_desc: "مفاجأة عفوية",

    // Step 4
    step4_addons_title: "4. الإضافات وبطاقة الإهداء",
    step4_addons_sub: "اختر الإضافات الخاصة ثم اكتب رسالة الصندوق.",
    addon_wax: "ختم شمعي أحمر فاخر",
    addon_wax_desc: "ختم رسمي من الشمع يعطي طابع الفخامة الملكية (+$5).",
    addon_card: "بطاقة إهداء بخط اليد",
    addon_card_desc: "كتابة رسالتك الخاصة بحبر أنيق على ورق مقوى فاخر (+$5).",
    addon_polaroid: "صور بولارويد تذكارية",
    addon_polaroid_desc: "طباعة صورتين خاصتين وتثبيتهما بداخل غطاء البوكس (+$8).",
    addon_scent: "تعطير الصندوق برائحة خاصة",
    addon_scent_desc: "تفوح رائحة عطرية مميزة فور فتح العميل للصندوق (+$4).",
    form_recip: "اسم مستلم الصندوق (Recipient Name)",
    form_msg: "نص رسالة الإهداء (Gift Card Message)",
    btn_review: "معاينة الصندوق والطلب ←",

    // Step 5 Review
    cust_s5_title: "5. معاينة وتأكيد الصندوق",
    cust_s5_desc: "راجع تفاصيل طلبك النهائي والحساب الإجمالي قبل الاعتماد.",
    summary_box_type: "نوع وحجم الصندوق:",
    summary_experience: "طابع الصندوق:",
    summary_target: "الفئة المستهدفة:",
    summary_occasion: "المناسبة:",
    summary_addons: "الإضافات المختارة:",
    summary_recip: "المستلم:",
    summary_note: "رسالة الإهداء:",
    btn_add_custom: "إضافة الصندوق إلى السلة",
    btn_direct_wa: "طلب هذا الصندوق مباشرة عبر واتساب",

    // Cart & Global
    cart_title: "سلة المشتريات",
    cart_empty: "السلة فارغة حالياً.",
    cart_total: "الإجمالي",
    cart_checkout: "إتمام الطلب عبر واتساب",
    footer_slogan: "نظام واحد. تعبيرات متعددة.",
    footer_rights: "جميع الحقوق محفوظة © 2026 MH Brand."
  },
  en: {
    nav_home: "HOME",
    nav_boxes: "BOXES",
    nav_customize: "CUSTOMIZE",
    nav_about: "ABOUT",
    nav_contact: "CONTACT",
    lang_btn: "عربي",

    // Customizer Stepper
    cust_label: "CORE EXPERIENCE",
    cust_title: "CUSTOMIZE YOUR BOX",
    step1_tab: "TIER & STYLE",
    step2_tab: "RECIPIENT",
    step3_tab: "OCCASION",
    step4_tab: "ADD-ONS & CARD",
    step5_tab: "REVIEW & ORDER",

    // Step 1
    box_size_title: "1. Select Box Tier & Size",
    box_size_sub: "Every size is crafted to match its specific volume and items perfectly.",
    tier_special: "Special Luxury Box",
    tier_special_desc: "Our largest box, housing over 5 premium curated gifts in royal fashion.",
    tier_regular: "Regular Box",
    tier_regular_desc: "Most sought-after option, fitting 3 to 4 refined essentials.",
    tier_mini: "Mini Box",
    tier_mini_desc: "Compact and understated, perfect for precious jewelry or small tokens.",
    box_experience_title: "Experience Vibe",
    exp_mystery: "100% Mystery Box",
    exp_mystery_desc: "Our curators hand-select items based on your recipient and moment.",
    exp_curated: "Classic Semi-Curated",
    exp_curated_desc: "Pre-aligned gift categories paired with unexpected surprises.",
    btn_continue: "CONTINUE →",
    btn_back: "← BACK",

    // Step 2 & 3
    cust_s1_title: "2. Who is it for?",
    cust_s1_desc: "Define the recipient to tailor the core aesthetic and contents.",
    target_couple: "Couples",
    target_couple_desc: "For your partner",
    target_fiance: "Fiancé",
    target_fiance_desc: "New beginnings",
    target_friend: "Friend",
    target_friend_desc: "Close companions",
    target_family: "Family",
    target_family_desc: "Home & loved ones",
    target_parent: "Parent",
    target_parent_desc: "Mother or Father",
    target_kids: "Kids",
    target_kids_desc: "Playful surprises",
    cust_s2_title: "3. What's the occasion?",
    cust_s2_desc: "Align packaging, ribbon aesthetics, and tone to the celebration.",
    occ_birthday: "Birthday",
    occ_birthday_desc: "Another milestone",
    occ_graduation: "Graduation",
    occ_graduation_desc: "Hard work rewarded",
    occ_engagement: "Engagement",
    occ_engagement_desc: "Next chapter",
    occ_wedding: "Wedding",
    occ_wedding_desc: "The big celebration",
    occ_anniversary: "Anniversary",
    occ_anniversary_desc: "Cherished moments",
    occ_valentines: "Valentine's",
    occ_valentines_desc: "Pure affection",
    occ_ramadan: "Ramadan",
    occ_ramadan_desc: "Generous spirit",
    occ_justbecause: "Just Because",
    occ_justbecause_desc: "Spontaneous joy",

    // Step 4
    step4_addons_title: "4. Add-ons & Gift Message",
    step4_addons_sub: "Select special touches and customize the card message.",
    addon_wax: "Wax Seal & Luxury Wrap",
    addon_wax_desc: "Authentic royal red wax seal on luxury paper (+$5).",
    addon_card: "Handwritten Gift Card",
    addon_card_desc: "Your words handwritten with elegant calligraphy ink (+$5).",
    addon_polaroid: "Polaroid Keepsakes (x2)",
    addon_polaroid_desc: "Two printed keepsake photos framed inside the lid (+$8).",
    addon_scent: "Aromatic Unboxing Scent",
    addon_scent_desc: "A signature bespoke aroma that diffuses upon opening (+$4).",
    form_recip: "Recipient Name",
    form_msg: "Gift Card Message",
    btn_review: "REVIEW & ORDER →",

    // Step 5 Review
    cust_s5_title: "5. Review Your Box",
    cust_s5_desc: "Confirm your custom selection and total pricing before placing your order.",
    summary_box_type: "Box Tier & Size:",
    summary_experience: "Experience Vibe:",
    summary_target: "Target Recipient:",
    summary_occasion: "Occasion:",
    summary_addons: "Selected Add-ons:",
    summary_recip: "Recipient Name:",
    summary_note: "Gift Card Note:",
    btn_add_custom: "ADD TO CART",
    btn_direct_wa: "ORDER THIS BOX DIRECTLY VIA WHATSAPP",

    // Cart & Global
    cart_title: "YOUR CART",
    cart_empty: "Your cart is currently empty.",
    cart_total: "Total",
    cart_checkout: "CHECKOUT VIA WHATSAPP",
    footer_slogan: "One system. Many expressions.",
    footer_rights: "© 2026 MH Brand. All Rights Reserved."
  }
};

const AppStore = {
  cart: [],
  lang: localStorage.getItem("mh_lang") || "ar",

  init() {
    try {
      const stored = localStorage.getItem("mh_cart");
      if (stored) this.cart = JSON.parse(stored);
    } catch (e) {
      this.cart = [];
    }
    this.applyLanguage(this.lang);
    this.updateCartUI();
    this.bindEvents();
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

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.innerText = I18N_DATA[lang].lang_btn;
    });

    // إعادة تحديث المعاينة إن كانت الصفحة customize.html
    if (typeof calculateBoxDetails === "function") {
      calculateBoxDetails();
    }
  },

  toggleLanguage() {
    this.applyLanguage(this.lang === "ar" ? "en" : "ar");
  },

  addToCart(item) {
    const existing = this.cart.find(i => i.id === item.id);
    if (existing) {
      existing.qty += 1;
    } else {
      this.cart.push({ ...item, qty: 1 });
    }
    this.saveCart();
    this.openCart();
  },

  removeFromCart(id) {
    this.cart = this.cart.filter(i => i.id !== id);
    this.saveCart();
  },

  saveCart() {
    localStorage.setItem("mh_cart", JSON.stringify(this.cart));
    this.updateCartUI();
  },

  getTotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  },

  updateCartUI() {
    const badge = document.getElementById("cartBadge");
    if (badge) badge.innerText = this.cart.reduce((s, i) => s + i.qty, 0);

    const list = document.getElementById("cartList");
    const totalEl = document.getElementById("cartTotal");
    if (totalEl) totalEl.innerText = `$${this.getTotal().toFixed(2)}`;

    if (list) {
      if (this.cart.length === 0) {
        list.innerHTML = `<p class="cart-empty-text">${I18N_DATA[this.lang].cart_empty}</p>`;
        return;
      }
      list.innerHTML = this.cart.map(item => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:#1C1C1E; border:1px solid rgba(255,255,255,0.06); margin-bottom:10px;">
          <div>
            <div style="font-weight:700; font-size:14px;">${item.title}</div>
            <div style="font-size:12px; color:var(--mh-cool-grey);">${item.details || ''}</div>
            <div style="color:var(--mh-orange); font-weight:700; font-size:13px; margin-top:4px;">$${item.price} &times; ${item.qty}</div>
          </div>
          <button onclick="AppStore.removeFromCart('${item.id}')" style="background:transparent; border:none; color:var(--mh-cool-grey); cursor:pointer;">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      `).join("");
    }
  },

  openCart() {
    const drawer = document.getElementById("cartOverlay");
    if (drawer) drawer.classList.add("open");
  },

  closeCart() {
    const drawer = document.getElementById("cartOverlay");
    if (drawer) drawer.classList.remove("open");
  },

  checkout() {
    if (this.cart.length === 0) return;
    let msg = `MH Brand Order:\n------------------------\n`;
    this.cart.forEach((i, idx) => {
      msg += `${idx + 1}. ${i.title} (x${i.qty}) - $${i.price * i.qty}\n   ${i.details || ''}\n`;
    });
    msg += `------------------------\nTotal: $${this.getTotal().toFixed(2)}`;
    window.open(`https://wa.me/${MH_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  },

  bindEvents() {
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => this.toggleLanguage());
    });

    const openBtn = document.getElementById("cartOpenBtn");
    const closeBtn = document.getElementById("cartCloseBtn");
    const overlay = document.getElementById("cartOverlay");

    if (openBtn) openBtn.addEventListener("click", () => this.openCart());
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeCart());
    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closeCart();
      });
    }

    const hamburger = document.getElementById("hamburgerBtn");
    const menu = document.getElementById("navMenu");
    if (hamburger && menu) {
      hamburger.addEventListener("click", () => menu.classList.toggle("open"));
    }

    // إدارة خيارات النقر في الـ Customizer
    document.querySelectorAll(".custom-options-grid").forEach(grid => {
      const isMulti = grid.hasAttribute("data-multi");
      grid.querySelectorAll(".option-box").forEach(box => {
        box.addEventListener("click", () => {
          if (!isMulti) {
            grid.querySelectorAll(".option-box").forEach(b => b.classList.remove("selected"));
            box.classList.add("selected");
          } else {
            box.classList.toggle("selected");
          }
          if (typeof calculateBoxDetails === "function") {
            calculateBoxDetails();
          }
        });
      });
    });
  }
};

// حساب تفاصيل الصندوق ومعاينته الحية
function calculateBoxDetails() {
  const selectedTierEl = document.querySelector("#boxTierGrid .option-box.selected");
  const basePrice = selectedTierEl ? parseFloat(selectedTierEl.getAttribute("data-price")) : 90;
  const tierName = selectedTierEl ? selectedTierEl.querySelector("h4").innerText : "Special Box";

  const selectedExpEl = document.querySelector("#boxExpGrid .option-box.selected");
  const expName = selectedExpEl ? selectedExpEl.querySelector("h4").innerText : "Mystery Box";

  const targetEl = document.querySelector("#targetGrid .option-box.selected");
  const targetName = targetEl ? targetEl.querySelector("h4").innerText : "Couple";

  const occEl = document.querySelector("#occasionGrid .option-box.selected");
  const occName = occEl ? occEl.querySelector("h4").innerText : "Birthday";

  let addonsPrice = 0;
  const addonsList = [];
  document.querySelectorAll("#addonsGrid .option-box.selected").forEach(el => {
    addonsPrice += parseFloat(el.getAttribute("data-price") || 0);
    addonsList.push(el.querySelector("h4").innerText);
  });

  const recipName = document.getElementById("customRecipInput")?.value || "-";
  const cardMsg = document.getElementById("customMsgInput")?.value || "-";
  const totalPrice = basePrice + addonsPrice;

  // تحديث عناصر المراجعة
  const sumBoxType = document.getElementById("sumBoxType");
  const sumBoxExp = document.getElementById("sumBoxExp");
  const sumTarget = document.getElementById("sumTarget");
  const sumOccasion = document.getElementById("sumOccasion");
  const sumAddons = document.getElementById("sumAddons");
  const sumRecip = document.getElementById("sumRecip");
  const sumNote = document.getElementById("sumNote");
  const sumFinalPrice = document.getElementById("sumFinalPrice");

  if (sumBoxType) sumBoxType.innerText = tierName;
  if (sumBoxExp) sumBoxExp.innerText = expName;
  if (sumTarget) sumTarget.innerText = targetName;
  if (sumOccasion) sumOccasion.innerText = occName;
  if (sumAddons) sumAddons.innerText = addonsList.length > 0 ? addonsList.join(", ") : "None";
  if (sumRecip) sumRecip.innerText = recipName;
  if (sumNote) sumNote.innerText = cardMsg;
  if (sumFinalPrice) sumFinalPrice.innerText = `$${totalPrice.toFixed(2)}`;

  return {
    tierName,
    expName,
    targetName,
    occName,
    addons: addonsList.join(", "),
    recipName,
    cardMsg,
    totalPrice
  };
}

window.goToStep = function(stepNum) {
  document.querySelectorAll(".step-view").forEach(v => {
    v.classList.toggle("active", parseInt(v.getAttribute("data-step")) === stepNum);
  });
  document.querySelectorAll(".stepper-btn").forEach(p => {
    p.classList.toggle("active", parseInt(p.getAttribute("data-step")) === stepNum);
  });
  calculateBoxDetails();
};

window.addCompleteBoxToCart = function() {
  const details = calculateBoxDetails();
  AppStore.addToCart({
    id: "box-" + Date.now(),
    title: `MH ${details.tierName}`,
    price: details.totalPrice,
    details: `${details.targetName} | ${details.occName} | Addons: ${details.addons || 'None'}`
  });
};

window.orderDirectWhatsApp = function() {
  const d = calculateBoxDetails();
  const text = `MH Brand — Direct Custom Box Order\n--------------------------------\n` +
               `🎁 Box Tier: ${d.tierName}\n` +
               `✨ Vibe: ${d.expName}\n` +
               `👤 Recipient: ${d.targetName} (${d.recipName})\n` +
               `🎉 Occasion: ${d.occName}\n` +
               `➕ Add-ons: ${d.addons || 'None'}\n` +
               `💌 Card Message: "${d.cardMsg}"\n` +
               `--------------------------------\n` +
               `Total Amount: $${d.totalPrice.toFixed(2)}\n\n` +
               `يرجى تأكيد استلام الطلب وبدء التجهيز.`;

  window.open(`https://wa.me/${MH_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
};

document.addEventListener("DOMContentLoaded", () => AppStore.init());
