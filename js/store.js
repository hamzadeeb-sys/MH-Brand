/* Store & State Management for MH Brand */
const MHStore = {
  cart: [],

  init() {
    try {
      const stored = localStorage.getItem('mh_cart');
      if (stored) this.cart = JSON.parse(stored);
    } catch (e) {
      this.cart = [];
    }
    this.updateUI();
  },

  save() {
    localStorage.setItem('mh_cart', JSON.stringify(this.cart));
    this.updateUI();
  },

  addItem(item) {
    const existingIndex = this.cart.findIndex(i => i.id === item.id);
    if (existingIndex > -1) {
      this.cart[existingIndex].qty += 1;
    } else {
      this.cart.push({
        id: item.id || 'box-' + Date.now(),
        title: item.title,
        price: Number(item.price),
        details: item.details || '',
        qty: 1
      });
    }
    this.save();
    this.openDrawer();
  },

  removeItem(id) {
    this.cart = this.cart.filter(item => item.id !== id);
    this.save();
  },

  getTotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  },

  updateUI() {
    const badge = document.getElementById('cartCountBadge');
    const totalCount = this.cart.reduce((sum, item) => sum + item.qty, 0);
    if (badge) badge.innerText = totalCount;

    const listContainer = document.getElementById('cartItemsList');
    const totalContainer = document.getElementById('cartTotalDisplay');

    if (totalContainer) {
      totalContainer.innerText = `$${this.getTotal().toFixed(2)}`;
    }

    if (listContainer) {
      if (this.cart.length === 0) {
        listContainer.innerHTML = '<p class="cart-empty-text">السلة فارغة حالياً.</p>';
        return;
      }

      listContainer.innerHTML = this.cart.map(item => `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; padding:12px; background:#161616; border:1px solid #262626;">
          <div>
            <div style="font-weight:700; font-size:14px; font-family:var(--font-en);">${item.title}</div>
            <div style="font-size:12px; color:var(--mh-cool-grey); margin:4px 0;">${item.details}</div>
            <div style="font-family:var(--font-en); color:var(--mh-orange); font-size:13px; font-weight:600;">$${item.price} &times; ${item.qty}</div>
          </div>
          <button onclick="MHStore.removeItem('${item.id}')" style="background:transparent; border:none; color:var(--mh-cool-grey); cursor:pointer;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      `).join('');
    }
  },

  openDrawer() {
    const drawer = document.getElementById('cartDrawerOverlay');
    if (drawer) drawer.classList.add('open');
  },

  closeDrawer() {
    const drawer = document.getElementById('cartDrawerOverlay');
    if (drawer) drawer.classList.remove('open');
  },

  checkoutWhatsApp(phone) {
    if (this.cart.length === 0) {
      alert('السلة فارغة.');
      return;
    }
    let msg = `MH Brand — New Order Request\n------------------------\n`;
    this.cart.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.title} (x${item.qty}) - $${item.price * item.qty}\n   ${item.details}\n`;
    });
    msg += `------------------------\nTotal: $${this.getTotal().toFixed(2)}\n`;
    msg += `يرجى تأكيد استلام الطلب وتزويدي ببيانات الدفع والتوصيل.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }
};

document.addEventListener('DOMContentLoaded', () => MHStore.init());
