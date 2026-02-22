export function initCookieConsent() {
    const cookieConsent = document.getElementById('cookie-consent');
    if (!cookieConsent) return;

    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 1000);
    }

    document.getElementById('accept-cookies')?.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.classList.remove('show');
        loadAnalytics();
    });

    document.getElementById('refuse-cookies')?.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'refused');
        cookieConsent.classList.remove('show');
    });
}

function loadAnalytics() {
    // Exemple Google Analytics (à remplacer par votre ID)
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    script.async = true;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
}

// Auto-init
document.addEventListener('DOMContentLoaded', initCookieConsent);