// ============================================
// CONFIGURAÇÕES
// ============================================

const WHATSAPP_NUMBER = '554884688350';
const VOUCHER_MESSAGE = `Olá! Vi a oferta do voucher de R$40 para consumo e gostaria de fazer uma reserva no Motel Xenon! 🎁`;

// ============================================
// REDIRECT TO WHATSAPP
// ============================================

function redirectToWhatsApp() {
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(VOUCHER_MESSAGE)}`;
    
    // Dispara ambos os eventos de conversão do Google Ads
    if (typeof gtag === 'function') {
        // Conversão original da LP
        gtag('event', 'conversion', {
            'send_to': 'AW-17435400574/kArdCMPH8MobEP6y7PlA',
            'value': 1.0,
            'currency': 'BRL'
        });
        
        // Conversão de Contato WPP LP PROMO
        gtag('event', 'conversion', {
            'send_to': 'AW-17435400574/HY3-CKSZ8_UbEP6y7PlA',
            'value': 1.0,
            'currency': 'BRL'
        });
    }
    
    // Redireciona para WhatsApp
    window.open(whatsappURL, '_blank');
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Lazy load video
    const video = document.querySelector('.hero-video');
    if (video) {
        // Play video após carregar
        video.addEventListener('loadeddata', function() {
            video.play().catch(err => {
                console.log('Autoplay prevented:', err);
            });
        });
        
        // Pause video quando tab não está ativa para economizar bateria
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                video.pause();
            } else {
                video.play().catch(err => {
                    console.log('Autoplay prevented:', err);
                });
            }
        });
    }
    
    // Prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('video').forEach(video => {
            video.pause();
        });
    }
    
    // Track CTA clicks
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Track event on Google Analytics
            if (typeof gtag === 'function') {
                gtag('event', 'click', {
                    'event_category': 'CTA',
                    'event_label': 'Voucher WhatsApp',
                    'value': 40
                });
            }
        });
    }
});

// ============================================
// PREVENT CONTEXT MENU ON VIDEO (OPTIONAL)
// ============================================

document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'VIDEO') {
        e.preventDefault();
        return false;
    }
});
