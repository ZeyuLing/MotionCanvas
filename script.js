const header = document.querySelector('[data-header]');
const fullDemo = document.querySelector('#full-demo-video');
const previews = [...document.querySelectorAll('.motion-preview')];
const toggle = document.querySelector('[data-motion-toggle]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const dialog = document.querySelector('[data-lightbox]');
const opener = document.querySelector('[data-lightbox-open]');
let playVisible = false;
const visible = new Set();
const play = video => video.play().catch(() => { /* Native controls remain available. */ });
const syncToggle = () => {
  toggle.setAttribute('aria-pressed', String(playVisible));
  toggle.textContent = playVisible ? 'Pause previews' : 'Play visible previews';
};
const syncPreviews = () => {
  previews.forEach(video => {
    if (playVisible && visible.has(video) && !document.hidden) play(video);
    else video.pause();
  });
  syncToggle();
};
const observer = new IntersectionObserver(entries => {
  entries.forEach(({target, isIntersecting}) => {
    if (isIntersecting) {
      visible.add(target);
      if (!target.dataset.metadataRequested) {
        target.dataset.metadataRequested = 'true';
        target.preload = 'metadata';
        target.load();
      }
    }
    else { visible.delete(target); target.pause(); }
    if (isIntersecting && playVisible && !document.hidden) play(target);
  });
}, {threshold: 0.25});
previews.forEach(video => observer.observe(video));
toggle.addEventListener('click', () => { playVisible = !playVisible; syncPreviews(); });
reducedMotion.addEventListener('change', () => { playVisible = false; syncPreviews(); });
document.addEventListener('visibilitychange', syncPreviews);
fullDemo.addEventListener('play', () => { playVisible = false; syncPreviews(); });
document.querySelectorAll('video').forEach(video => {
  const showError = () => {
    const message = video.nextElementSibling;
    if (message?.classList.contains('media-error')) message.hidden = false;
  };
  video.addEventListener('error', showError);
  video.querySelectorAll('source').forEach(source => source.addEventListener('error', showError));
});
document.querySelectorAll('[data-seek]').forEach(button => {
  button.addEventListener('click', () => {
    const seek = () => { fullDemo.currentTime = Number(button.dataset.seek); play(fullDemo); };
    if (fullDemo.readyState >= 1) seek();
    else { fullDemo.addEventListener('loadedmetadata', seek, {once: true}); fullDemo.load(); }
    fullDemo.focus({preventScroll: true});
  });
});
opener.addEventListener('click', () => dialog.showModal());
document.querySelector('[data-lightbox-close]').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => opener.focus({preventScroll: true}));
dialog.addEventListener('click', event => {
  const r = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) dialog.close();
});
const syncHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 18);
window.addEventListener('scroll', syncHeader, {passive: true});
syncHeader(); syncToggle();
