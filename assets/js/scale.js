(function () {
  function resizePages() {
    var pages = document.querySelectorAll('.pdf-page');
    pages.forEach(function (page) {
      var width = page.getBoundingClientRect().width;
      var scale = width / 892;
      page.style.setProperty('--scale', scale);
      page.style.height = (1186 * scale) + 'px';
    });
  }
  resizePages();
  window.addEventListener('resize', resizePages, { passive: true });
})();
