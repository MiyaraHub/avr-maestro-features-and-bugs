/* Click any screenshot to see it full size.
 *
 * Delegated from the document rather than bound per image, so a page that
 * gains a figure later needs no change here and the cost is one listener.
 * Screenshots on this site are phone captures shown at a few hundred pixels
 * wide; the detail people came for - a setting name, a channel label - is
 * unreadable until it is enlarged.
 */
(function () {
  'use strict';

  var overlay = null;
  var lastFocused = null;

  function build() {
    if (overlay) return overlay;
    overlay = document.createElement('div');
    overlay.className = 'lb';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Enlarged screenshot');
    overlay.innerHTML =
      '<button class="lb-close" aria-label="Close">&times;</button>' +
      '<img alt="" />';
    overlay.addEventListener('click', function (e) {
      // Anywhere except the image itself closes it, which is what people try.
      if (e.target.tagName !== 'IMG') close();
    });
    document.body.appendChild(overlay);
    return overlay;
  }

  function open(img) {
    var lb = build();
    var full = lb.querySelector('img');
    full.src = img.currentSrc || img.src;
    // The caption is the accessible name people need; falling back to the
    // page's alt text keeps it meaningful when there is no figcaption.
    var cap = img.closest('figure')
      ? img.closest('figure').querySelector('figcaption')
      : null;
    full.alt = cap ? cap.textContent : img.alt || '';
    lastFocused = document.activeElement;
    lb.classList.add('open');
    document.body.classList.add('lb-lock');
    lb.querySelector('.lb-close').focus();
  }

  function close() {
    if (!overlay || !overlay.classList.contains('open')) return;
    overlay.classList.remove('open');
    document.body.classList.remove('lb-lock');
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  // Matched by WHAT THE IMAGE IS, not by the box somebody put it in.
  //
  // This was a list of three container classes - figure, .hero-shot, .gallery -
  // and the site has seven. 34 of 87 screenshots were not clickable: every one
  // in .shots-grid, .lockrow, .with-shot and .shots, which is most of the
  // /guide manual and the pages a reader most needs to enlarge, because the
  // detail they came for is a setting name at 250px wide. Reported by Meir on
  // 2026-08-19: "old screenshots are not clickable".
  //
  // A class list has to be extended every time a page gains a layout, and
  // nothing tells you when it was not. Every screenshot on this site lives
  // under /screenshots/, so that is the rule - a new page cannot miss it, and
  // an icon or a badge is still left alone.
  function isScreenshot(img) {
    var src = img.getAttribute('src') || '';
    return src.indexOf('/screenshots/') !== -1 || src.indexOf('screenshots/') === 0;
  }

  document.addEventListener('click', function (e) {
    var img = e.target.closest('img');
    if (!img || !isScreenshot(img)) return;
    // A screenshot inside a link is a navigation the author meant.
    if (img.closest('a')) return;
    e.preventDefault();
    open(img);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
