/* ===================================================
   MH Brand - Core Engine (i18n, Cart, Customizer)
   =================================================== */

const MH_CONFIG = {
  whatsappNumber: "963900000000", // ضع رقمك بالصيغة الدولية هنا
  instagramUsername: "mh_brand"
};

// قاموس الترجمة الموحد
const I18N_DATA = {
  ar: {
    nav_home: "الرئيسية",
    nav_boxes: "البوكسات",
    nav_customize: "تخصيص الصندوق",
    nav_about: "عن البراند",
    nav_contact: "تواصل معنا",
    lang_btn: "EN",
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
    ready_title: "جاهز لصناعة مفاجأة لا تُنسى؟",
    ready_btn: "ابدأ بتجهيز الصندوق",
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
    box_milestone_title: "صندوق أعياد الميلاد",
    box_milestone_desc: "صندوق مفاجآت يحمل هدايا مختارة بدقة تتناسب مع اهتمامات الشخص.",
    box_bond_title: "صندوق الصداقة الدائمة",
    box_bond_desc: "هدية أنيقة ومفاجئة تعبّر عن الامتنان والرفقة الدائمة.",
    btn_add_cart: "إضافة للسلة",
    btn_view_details: "تخصيص البوكس",
    in_stock: "متوفر للطلب",
    cust_title: "تخصيص صندوقك الخاص",
    cust_label: "التجربة الأساسية",
    cust_s1_title: "الخطوة 01: لمن هذا الصندوق؟",
    cust_s1_desc: "حدد الشخص المستهدف لنخصص النمط الداخلي للهدية.",
    btn_continue: "متابعة ←",
    btn_back: "← رجوع",
    cust_s2_title: "الخطوة 02: ما هي المناسبة؟",
    cust_s2_desc: "اختر المناسبة ليتم مواءمة الهدايا والرسالة معها.",
    cust_s3_title: "الخطوة 03: العناصر المفضلة",
    cust_s3_desc: "اختر العناصر التي ترغب في تواجدها داخل البوكس.",
    cust_s4_title: "الخطوة 04: اللمسات الشخصية",
    cust_s4_desc: "أضف بطاقة الإهداء والرسالة التي ترغب في وضعها.",
    form_recip: "اسم مستلم الصندوق",
    form_msg: "نص رسالة الإهداء",
    btn_review: "معاينة الصندوق ←",
    cust_s5_title: "الخطوة 05: معاينة وتأكيد الصندوق",
    cust_s5_desc: "راجع تفاصيل طلبك النهائي قبل الإضافة إلى السلة.",
    btn_add_custom: "إضافة الصندوق إلى السلة",
    about_title: "أكثر من مجرد صندوق.",
    about_desc: "تأسست MH حول فكرة واحدة بسيطة: تحويل اللحظات العادية إلى مفاجآت لا تُنسى تبقى في الذاكرة للأبد.",
    contact_title: "دعنا نتحدث.",
    contact_desc: "نسعد بتلقي استفساراتك وطلباتك الخاصة مباشرة.",
    btn_send: "إرسال الرسالة",
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
    hero_tag: "More Than a Box",
    hero_title: "A Box. A Surprise. A Moment.",
    hero_desc: "Turning ordinary moments into memorable surprises through meticulously curated boxes and refined elegance.",
    hero_btn_discover: "DISCOVER BOXES",
    hero_btn_customize: "CUSTOMIZE YOUR BOX",
    concept_title: "Choose the moment. We create the surprise.",
    concept_desc: "Mystery Boxes designed for couples, friends, families, and every special moment.",
    moments_label: "MOMENTS",
    moments_title: "FOR EVERY MOMENT",
    moment_couples: "Couples",
    moment_couples_sub: "Memorable moments to cherish together",
    moment_engagement: "Engagement",
    moment_engagement_sub: "The beginning of a timeless story",
    moment_wedding: "Wedding",
    moment_wedding_sub: "Elegance crafted for the big day",
    moment_friends: "Friends",
    moment_friends_sub: "Genuine tokens of lasting bonds",
    moment_birthday: "Birthday",
    moment_birthday_sub: "A joyful annual surprise crafted with care",
    moment_graduation: "Graduation",
    moment_graduation_sub: "Honoring years of dedication and triumph",
    how_label: "PROCESS",
    how_title: "HOW IT WORKS",
    how_s1_title: "Choose",
    how_s1_desc: "Select the occasion and the base box tailored to your recipient.",
    how_s2_title: "Customize",
    how_s2_desc: "Personalize items, choose addons, and include your custom note.",
    how_s3_title: "Surprise",
    how_s3_desc: "Receive the signature box and unveil the magic together.",
    make_label: "CUSTOM EXPERIENCE",
    make_title: "MAKE IT YOURS",
    make_desc: "Build your gift box from scratch with absolute fluidity and precision.",
    make_btn: "CUSTOMIZE YOUR BOX →",
    ready_title: "Ready to create a surprise?",
    ready_btn: "BUILD YOUR BOX",
    boxes_title: "MYSTERY BOXES",
    boxes_sub: "Discover a box made for your moment.",
    filter_all: "ALL",
    filter_couple: "COUPLE",
    filter_fiance: "FIANCÉ",
    filter_friend: "FRIEND",
    filter_birthday: "BIRTHDAY",
    filter_wedding: "WEDDING",
    box_noir_title: "The Noir Edition",
    box_noir_desc: "A bespoke blend of artisanal fragrances and handmade personal accessories.",
    box_suite_title: "Bride & Groom Suite",
    box_suite_desc: "A harmonious ensemble for couples with sealed wax and a custom card.",
    box_milestone_title: "The Milestone Box",
    box_milestone_desc: "A curated birthday surprise designed specifically around personal interests.",
    box_bond_title: "Everyday Bond",
    box_bond_desc: "An understated, elegant surprise celebrating true friendship and gratitude.",
    btn_add_cart: "ADD TO CART",
    btn_view_details: "CUSTOMIZE",
    in_stock: "IN STOCK",
    cust_title: "CUSTOMIZE YOUR BOX",
    cust_label: "CORE EXPERIENCE",
    cust_s1_title: "STEP 01: Who is it for?",
    cust_s1_desc: "Define the recipient to tailor the core style and curation.",
    btn_continue: "CONTINUE →",
    btn_back: "← BACK",
    cust_s2_title: "STEP 02: What's the occasion?",
    cust_s2_desc: "Match the gifts, color themes, and presentation to the event.",
    cust_s3_title: "STEP 03: Choose your items",
    cust_s3_desc: "Select the categories you'd love included inside the surprise box.",
    cust_s4_title: "STEP 04: Personalize",
    cust_s4_desc: "Add your personal message to be handwritten or printed on the card.",
    form_recip: "Recipient Name",
    form_msg: "Gift Card Message",
    btn_review: "REVIEW BOX →",
    cust_s5_title: "STEP 05: Review Your Box",
    cust_s5_desc: "Confirm your selection details before adding to cart.",
    btn_add_custom: "ADD TO CART",
    about_title: "MORE THAN A BOX.",
    about_desc: "MH is built around one simple idea: turning ordinary moments into memorable surprises that endure forever.",
    contact_title: "LET'S TALK.",
    contact_desc: "We look forward to receiving your inquiries and special orders.",
    btn_send: "SEND MESSAGE",
    cart_title: "YOUR CART",
    cart_empty: "Your cart is currently empty.",
    cart_total: "Total",
    cart_checkout: "CHECKOUT VIA WHATSAPP",
    footer_slogan: "One system. Many expressions.",
    footer_rights: "© 2026 MH Brand. All Rights Reserved."
  }
};

// إدارة الحالة المشتركة والسلة
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
    if (badge) {
      badge.innerText = this.cart.reduce((s, i) => s + i.qty, 0);
    }

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
    let msg = `MH Brand Order:\n`;
    this.cart.forEach((i, idx) => {
      msg += `${idx + 1}. ${i.title} (x${i.qty}) - $${i.price * i.qty}\n   ${i.details || ''}\n`;
    });
    msg += `Total: $${this.getTotal().toFixed(2)}`;
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

    // فلترة المنتجات في صفحة boxes.html
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.getAttribute("data-filter");
        document.querySelectorAll(".product-card").forEach(card => {
          if (category === "all" || card.getAttribute("data-cat") === category) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });

    // خيارات التخصيص في customize.html
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
        });
      });
    });
  }
};

// إدارة خطوات الـ Customizer
window.goToStep = function(stepNum) {
  document.querySelectorAll(".step-view").forEach(v => {
    v.classList.toggle("active", parseInt(v.getAttribute("data-step")) === stepNum);
  });
  document.querySelectorAll(".progress-step-item").forEach(p => {
    p.classList.toggle("active", parseInt(p.getAttribute("data-step")) <= stepNum);
  });

  if (stepNum === 5) {
    const target = document.querySelector('[data-step="1"] .option-box.selected h4')?.innerText || 'General';
    const occasion = document.querySelector('[data-step="2"] .option-box.selected h4')?.innerText || 'Special';
    const note = document.getElementById("cardMsgInput")?.value || 'No special note';
    
    document.getElementById("sumTarget").innerText = target;
    document.getElementById("sumOccasion").innerText = occasion;
    document.getElementById("sumNote").innerText = note;
  }
};

window.addCustomBoxToCart = function() {
  const target = document.getElementById("sumTarget")?.innerText || "Custom";
  const occasion = document.getElementById("sumOccasion")?.innerText || "Special";
  const note = document.getElementById("sumNote")?.innerText || "";

  AppStore.addToCart({
    id: "box-" + Date.now(),
    title: "Custom Mystery Box",
    price: 85.00,
    details: `${target} | ${occasion} | "${note}"`
  });
};

document.addEventListener("DOMContentLoaded", () => AppStore.init());
