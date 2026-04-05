// BU Assistant Landing Page - Lemonsqueezy Integration
// Handles payment routing to APK downloads

const LEMONSQUEEZY_CONFIG = {
    BASIC: {
        plan: 'basic',
        product_id: 'a8dca598-9364-4ee1-85fc-7c90c9e95633', // Basic plan - 280 Rs one-time (LIVE)
        checkout_url: 'https://devpostai.lemonsqueezy.com/checkout/buy',
        apk: 'BU_Assistant_v1.1.0_BASIC.apk',
        price: 280
    }
};

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    setupPaymentButtons();
   setupModal();
    setupScrollBehavior();
});

function setupPaymentButtons() {
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', handlePaymentClick);
    });
}

function setupModal() {
    const modal = document.getElementById('paymentModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function setupScrollBehavior() {
    // Add smooth scroll behavior for links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function handlePaymentClick(e) {
    const plan = e.target.dataset.plan.toUpperCase();
    const price = e.target.dataset.price;
    
    if (!plan || !LEMONSQUEEZY_CONFIG[plan]) {
        showToast('Invalid plan selected. Please try again.', 'error');
        return;
    }
    
    startPaymentFlow(plan, price);
}

async function startPaymentFlow(plan, price) {
    const config = LEMONSQUEEZY_CONFIG[plan];
    
    try {
        showToast(`Starting ${plan} payment flow...`);
        
        // In development, check if we have real product IDs
        if (config.product_id === 'TBD') {
            showToast('⚠️ Payment not configured. Please contact support.', 'error');
            console.error(`${plan} product ID not configured. Set LEMONSQUEEZY_CONFIG.${plan}.product_id`);
            return;
        }
        
        // Build checkout URL — token is generated server-side after payment
        const checkoutUrl = buildCheckoutUrl(config);
        
        // Redirect to Lemonsqueezy checkout
        window.location.href = checkoutUrl;
        
    } catch (error) {
        console.error('Payment flow error:', error);
        showToast('Error starting payment. Please try again.', 'error');
    }
}

function buildCheckoutUrl(config) {
    return `${config.checkout_url}/${config.product_id}`;
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `show ${type}`;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Export for webhook handling if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEMONSQUEEZY_CONFIG, buildCheckoutUrl, generateCustomerToken };
}
