/* Reads image and project URLs from config.js. No build tools needed. */
(() => {
  const config = window.SITE_CONFIG || {};
  const get = (path) => path.split('.').reduce((obj, key) => obj?.[key], config);
  const safeURL = (value) => {
    if (typeof value !== 'string' || !value.trim()) return '';
    const valueTrimmed = value.trim();
    // Allow web URLs and local image paths; reject javascript:, data:, etc.
    if (/^https?:\/\//i.test(valueTrimmed)) return valueTrimmed;
    if (/^(?!\/|\\|\.\.)(?:[\w .-]+\/)*[\w .-]+\.(?:png|jpe?g|webp|gif|svg)(?:\?[^#]*)?$/i.test(valueTrimmed)) return valueTrimmed;
    return '';
  };
  const logo = safeURL(config.logo);
  if (logo) document.querySelectorAll('[data-logo]').forEach(img => {
    img.onerror = () => { img.onerror = null; img.src = 'assets/4you-logo.png'; };
    img.src = logo;
  });
  document.querySelectorAll('[data-image]').forEach(box => {
    const url = safeURL(get(box.dataset.image));
    if (!url) return;
    const image = document.createElement('img');
    image.alt = box.closest('article')?.querySelector('h3')?.textContent + ' image' || 'Profile image';
    image.loading = 'lazy';
    image.decoding = 'async';
    image.addEventListener('load', () => box.replaceChildren(image), {once:true});
    image.src = url;
    // On failure, keep original SVG or initial intact.
  });
  document.querySelectorAll('[data-link]').forEach(anchor => {
    const url = get(anchor.dataset.link);
    if (typeof url !== 'string' || !/^https?:\/\//i.test(url.trim())) return;
    anchor.href = url.trim();
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
  });
})();
