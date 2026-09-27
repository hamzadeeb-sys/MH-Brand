document.addEventListener('DOMContentLoaded', () => {
  // 1. إدارة تحديد العناصر التفاعلية
  const selectionItems = document.querySelectorAll('.selection-item');

  selectionItems.forEach(item => {
    const input = item.querySelector('input');
    if (!input) return;

    // تهيئة الحالة الأولية
    if (input.checked) {
      item.classList.add('selected');
    }

    item.addEventListener('click', () => {
      if (input.type === 'radio') {
        const groupName = input.name;
        document.querySelectorAll(`input[name="${groupName}"]`).forEach(radio => {
          radio.closest('.selection-item').classList.remove('selected');
        });
        input.checked = true;
        item.classList.add('selected');
      } else if (input.type === 'checkbox') {
        input.checked = !input.checked;
        item.classList.toggle('selected', input.checked);
      }
    });
  });

  // 2. إرسال الطلب المخصص إلى WhatsApp
  const sendOrderBtn = document.getElementById('sendWhatsAppOrderBtn');
  if (sendOrderBtn) {
    sendOrderBtn.addEventListener('click', () => {
      // استبدل هذا الرقم برقم الواتساب الخاص بك بالصيغة الدولية بدون + (مثال: 9639xxxxxxxx)
      const phoneNumber = "YOUR_PHONE_NUMBER";

      const selectedBox = document.querySelector('input[name="box_type"]:checked')?.value || 'غير محدد';
      const selectedTarget = document.querySelector('input[name="target_gender"]:checked')?.value || 'غير محدد';
      
      const addons = [];
      document.querySelectorAll('input[name="addons"]:checked').forEach(addon => {
        addons.push(addon.value);
      });
      const addonsText = addons.length > 0 ? addons.join('، ') : 'لا يوجد';

      const message = `مرحباً MH Brand 👋\nأود طلب وتجهيز بوكس جديد بالتفاصيل التالية:\n\n` +
                      `🎁 نوع الصندوق: ${selectedBox}\n` +
                      `👤 الفئة: ${selectedTarget}\n` +
                      `✨ الإضافات: ${addonsText}\n\n` +
                      `يرجى تزويدي بالسعر وتأكيد الطلب. شكراً لكم!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
    });
  }
});
