/* ===================================================
   MH Brand - Core Engine (i18n, No-Cart Direct Customizer)
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
    footer_rights: "جميع الحقوق محفوظة © 2026 MH Brand."
  },
  en: {
    nav_home: "HOME",
    nav_boxes: "BOXES",
    nav_customize: "CUSTOMIZE",
    nav_about: "ABOUT",
    nav_contact: "CONTACT",
    lang_btn: "عربي",
    footer_surprise_slogan: "LET US SURPRISE YOU",
    footer_rights: "© 2026 MH Brand. All Rights Reserved."
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

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.innerText = I18N_DATA[lang].lang_btn;
    });
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
        });
      });
    });
  }
};

// تجميع بيانات الصندوق
function collectCustomBoxData() {
  const selectedTier = document.querySelector("#boxTierGrid .option-box.selected");
  const basePrice = selectedTier ? parseFloat(selectedTier.getAttribute("data-price")) : 25;
  const tierName = selectedTier ? selectedTier.querySelector("h4").innerText + " (" + selectedTier.querySelector(".tier-badge").innerText + ")" : "باقة 25$";

  const vibe1 = document.querySelector("#vibeTier1Grid .option-box.selected h4")?.innerText || "هدايا خفيفة";
  const vibe2 = document.querySelector("#vibeTier2Grid .option-box.selected h4")?.innerText || "هدايا مألوفة";

  const relation = document.querySelector("#recipientRelationGrid .option-box.selected h4")?.innerText || "شخص مميز";
  const gender = document.getElementById("recipGenderSelect")?.value || "أنثى";
  const age = document.getElementById("recipAgeInput")?.value || "غير محدد";
  const favColor = document.getElementById("recipFavColorInput")?.value || "غير محدد";
  const interests = document.getElementById("recipInterestsInput")?.value || "لا يوجد";

  const occasion = document.querySelector("#occasionGrid .option-box.selected h4")?.innerText || "بدون مناسبة";

  let addonsPrice = 0;
  const addons = [];
  document.querySelectorAll("#addonsGrid .option-box.selected").forEach(el => {
    addonsPrice += parseFloat(el.getAttribute("data-price") || 0);
    addons.push(el.querySelector("h4").innerText);
  });

  const recipName = document.getElementById("recipNameInput")?.value || "بدون اسم";
  const cardMsg = document.getElementById("giftCardMsgInput")?.value || "لا توجد رسالة";
  const extraNotes = document.getElementById("extraNotesInput")?.value || "لا توجد ملاحظات إضافية";

  const totalPrice = basePrice + addonsPrice;

  return {
    tierName,
    vibe1,
    vibe2,
    relation,
    gender,
    age,
    favColor,
    interests,
    occasion,
    addons: addons.length > 0 ? addons.join(" + ") : "لا توجد إضافات",
    recipName,
    cardMsg,
    extraNotes,
    totalPrice
  };
}

// تحديث شاشة المعاينة
function updateReviewDisplay() {
  const data = collectCustomBoxData();
  const dateEl = document.getElementById("receiptDate");
  if (dateEl) dateEl.innerText = new Date().toLocaleDateString('ar-EG');

  document.getElementById("sumTier").innerText = data.tierName;
  document.getElementById("sumVibe1").innerText = data.vibe1;
  document.getElementById("sumVibe2").innerText = data.vibe2;
  document.getElementById("sumRelation").innerText = data.relation;
  document.getElementById("sumGenderAge").innerText = `${data.gender} (العمر: ${data.age})`;
  document.getElementById("sumColor").innerText = data.favColor;
  document.getElementById("sumInterests").innerText = data.interests;
  document.getElementById("sumOccasion").innerText = data.occasion;
  document.getElementById("sumAddons").innerText = data.addons;
  document.getElementById("sumName").innerText = data.recipName;
  document.getElementById("sumCardMsg").innerText = data.cardMsg;
  document.getElementById("sumExtraNotes").innerText = data.extraNotes;
  document.getElementById("sumFinalPrice").innerText = `$${data.totalPrice.toFixed(2)}`;
}

// التنقل بين الخطوات
window.goToStep = function(stepNum) {
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

// توليد الصورة وتنزيلها + فتح الواتساب
window.processOrderAndCapture = function() {
  const btn = document.getElementById("btnSubmitAndCapture");
  btn.innerText = "جاري حفظ كرت الطلب وتجهيز الواتساب...";
  btn.disabled = true;

  const data = collectCustomBoxData();
  const receiptElement = document.getElementById("orderReceiptCapture");

  // تحويل الكرت إلى صورة Canvas وتنزيلها
  html2canvas(receiptElement, {
    scale: 2,
    backgroundColor: "#121214"
  }).then(canvas => {
    // 1. تنزيل الصورة لجهاز العميل
    const link = document.createElement("a");
    link.download = `MH-Order-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    // 2. صياغة رسالة الواتساب
    const waText = 
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

    // 3. فتح الواتساب مباشرة
    setTimeout(() => {
      window.open(`https://wa.me/${MH_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`, "_blank");
      btn.innerText = "تأكيد وحفظ الطلب كصورة ومتابعة عبر واتساب";
      btn.disabled = false;
    }, 1000);
  }).catch(err => {
    console.error("Error generating receipt image:", err);
    btn.innerText = "تأكيد وحفظ الطلب كصورة ومتابعة عبر واتساب";
    btn.disabled = false;
  });
};

document.addEventListener("DOMContentLoaded", () => AppEngine.init());
