document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Cart Drawer open/close triggers
  const cartTrigger = document.getElementById('cartTriggerBtn');
  const cartClose = document.getElementById('cartCloseBtn');
  const drawerOverlay = document.getElementById('cartDrawerOverlay');

  if (cartTrigger) cartTrigger.addEventListener('click', () => MHStore.openDrawer());
  if (cartClose) cartClose.addEventListener('click', () => MHStore.closeDrawer());
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) MHStore.closeDrawer();
    });
  }

  // Filter Buttons on boxes.html
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      productCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Step-by-Step Customizer Logic (customize.html)
  const stepViews = document.querySelectorAll('.step-view');
  const stepItems = document.querySelectorAll('.progress-step-item');
  let currentStep = 1;

  window.goToStep = function(stepNum) {
    currentStep = stepNum;
    stepViews.forEach(view => {
      view.classList.toggle('active', parseInt(view.getAttribute('data-step')) === currentStep);
    });
    stepItems.forEach(item => {
      item.classList.toggle('active', parseInt(item.getAttribute('data-step')) <= currentStep);
    });

    if (currentStep === 5) {
      updateReviewSummary();
    }
  };

  // Option selection logic
  document.querySelectorAll('.custom-options-grid').forEach(grid => {
    const isMulti = grid.hasAttribute('data-multi');
    grid.querySelectorAll('.option-box').forEach(box => {
      box.addEventListener('click', () => {
        if (!isMulti) {
          grid.querySelectorAll('.option-box').forEach(b => b.classList.remove('selected'));
          box.classList.add('selected');
        } else {
          box.classList.toggle('selected');
        }
      });
    });
  });

  function updateReviewSummary() {
    const target = document.querySelector('[data-step="1"] .option-box.selected h4')?.innerText || 'Not Specified';
    const occasion = document.querySelector('[data-step="2"] .option-box.selected h4')?.innerText || 'Not Specified';
    
    const items = [];
    document.querySelectorAll('[data-step="3"] .option-box.selected h4').forEach(h => items.push(h.innerText));
    const itemsStr = items.length ? items.join(', ') : 'Curated Surprise Items';

    const cardNote = document.getElementById('cardMessageInput')?.value || 'No personal message';

    const reviewTarget = document.getElementById('summaryTarget');
    const reviewOccasion = document.getElementById('summaryOccasion');
    const reviewItems = document.getElementById('summaryItems');
    const reviewNote = document.getElementById('summaryNote');

    if (reviewTarget) reviewTarget.innerText = target;
    if (reviewOccasion) reviewOccasion.innerText = occasion;
    if (reviewItems) reviewItems.innerText = itemsStr;
    if (reviewNote) reviewNote.innerText = cardNote;
  }

  // Add customized box to cart
  const addCustomBoxBtn = document.getElementById('addCustomBoxBtn');
  if (addCustomBoxBtn) {
    addCustomBoxBtn.addEventListener('click', () => {
      const target = document.getElementById('summaryTarget')?.innerText;
      const occasion = document.getElementById('summaryOccasion')?.innerText;
      const note = document.getElementById('summaryNote')?.innerText;

      MHStore.addItem({
        id: 'custom-' + Date.now(),
        title: 'Custom Mystery Box',
        price: 85.00,
        details: `For: ${target} | Occasion: ${occasion} | Note: "${note}"`
      });
    });
  }
});
