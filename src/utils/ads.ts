// Google AdSense Configuration
export const ADSENSE_CLIENT_ID = 'ca-pub-1234567890123456';

export const initAds = () => {
  const script = document.createElement('script');
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
  document.head.appendChild(script);
};