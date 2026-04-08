// BU Assistant Landing Page - Gen Z Edition
// Payment integration with Lemonsqueezy

const LEMONSQUEEZY_CONFIG = {
    BASIC: {
        plan: 'basic',
        product_id: 'a8dca598-9364-4ee1-85fc-7c90c9e95633',
        checkout_url: 'https://devpostai.lemonsqueezy.com/checkout/buy',
        apk: 'BU_Assistant_v1.1.0_BASIC.apk',
        price: 0  // FREE during beta
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupPaymentButtons();
    setupSmoothScroll();
});

function setupPaymentButtons() {
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', handlePaymentClick);
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function handlePaymentClick(e) {
    e.preventDefault();
    const plan = e.target.dataset.plan.toUpperCase();
    
    if (!plan || !LEMONSQUEEZY_CONFIG[plan]) {
        showToast('Invalid plan. Try again.', 'error');
        return;
    }
    
    startPaymentFlow(plan);
}

async function startPaymentFlow(plan) {
    const config = LEMONSQUEEZY_CONFIG[plan];
    
    if (config.product_id === 'TBD') {
        showToast('⚠️ Payment config pending. contact support.', 'error');
        return;
    }
    
    const checkoutUrl = `${config.checkout_url}/${config.product_id}`;
    window.location.href = checkoutUrl;
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.className = `show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Analytics tracking (optional)
if (typeof gtag !== 'undefined') {
    document.querySelectorAll('.btn-buy').forEach(btn => {
        btn.addEventListener('click', () => {
            gtag('event', 'download_initiated', {
                'plan': btn.dataset.plan,
                'price': btn.dataset.price
            });
        });
    });
}
