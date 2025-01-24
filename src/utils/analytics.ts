// Google Analytics Configuration
export const GA_TRACKING_ID = 'UA-XXXXXXXXX-X';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Google Analytics initialization code
export const initGA = () => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID);
};

// Event tracking
export const trackEvent = (action: string, category: string, label: string) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
  });
};