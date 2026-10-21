(function () {
  function hasAccepted() {
    return document.cookie.split(';').some(function (part) {
      return part.trim() === 'cookie_ok=1';
    });
  }

  function init() {
    var warning = document.querySelector('.cookie-warning');
    if (!warning) return;

    var button = warning.querySelector('.cookie-submit');
    if (!button) return;

    if (hasAccepted()) return;
    warning.hidden = false;
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        warning.classList.add('is-visible');
      });
    });
    button.addEventListener('click', function () {
      var expires = new Date(Date.now() + 72 * 60 * 60 * 1000);
      var secure = window.location.protocol === 'https:' ? '; Secure' : '';
      document.cookie = 'cookie_ok=1; expires=' + expires.toUTCString() + '; path=/; SameSite=Lax' + secure;
      warning.hidden = true;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
