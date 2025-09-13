// Simple GA4 loader. Replace G-XXXXXXX below and it will inject the official gtag.
(function(){
  var GA_ID = window.NEUROVA_GA4_ID || '';
  if(!GA_ID) return; // no-op until configured
  var s = document.createElement('script');
  s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);} window.gtag = gtag;
  gtag('js', new Date()); gtag('config', GA_ID, { anonymize_ip: true });
})();
