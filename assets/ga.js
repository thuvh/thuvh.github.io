// Google Analytics (gtag.js) dùng chung cho mọi trang.
// Mỗi trang chỉ cần: <script src="/assets/ga.js" async></script>
// Chỉ đo trên site thật — mở file trên máy hay localhost thì không gửi gì, khỏi làm bẩn số liệu.
(function () {
  var GA_ID = 'G-3CYTBFGS04';
  if (location.hostname !== 'thuvh.github.io') return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID);
})();
