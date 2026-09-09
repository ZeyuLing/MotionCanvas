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
    const message = video.nextElementSibling?.classList.contains('media-error')
      ? video.nextElementSibling : video.closest('.benchmark-card')?.querySelector('.media-error');
    if (message?.classList.contains('media-error')) message.hidden = false;
  };
  video.addEventListener('error', showError);
  video.querySelectorAll('source').forEach(source => source.addEventListener('error', showError));
});
document.querySelectorAll('[data-seek]').forEach(button => {
  button.addEventListener('click', () => {
    const seek = () => { fullDemo.currentTime = Number(button.dataset.seek); };
    if (fullDemo.readyState >= 1) seek();
    else fullDemo.addEventListener('loadedmetadata', seek, {once: true});
    // Request playback within the click gesture; waiting for metadata first
    // can lose autoplay permission on a slow connection, especially on mobile.
    play(fullDemo);
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

// Filter examples without changing their order or hiding essential context.
const benchmarkFilters = document.querySelector('.benchmark-filters');
const benchmarkCards = [...document.querySelectorAll('[data-benchmark-group]')];
const benchmarkButtons = [...document.querySelectorAll('[data-benchmark-filter]')];
benchmarkFilters.hidden = false;
benchmarkButtons.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.benchmarkFilter;
  document.querySelector('.benchmark-grid').dataset.filtered = String(selected !== 'all');
  benchmarkButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  let count = 0;
  benchmarkCards.forEach(card => {
    const show = selected === 'all' || card.dataset.benchmarkGroup === selected;
    card.hidden = !show;
    if (!show) card.querySelector('video').pause();
    else count++;
  });
  document.querySelector('.benchmark-count').textContent = selected === 'all' ? `${count} examples · 4 per benchmark` : `${count} examples`;
}));
// Shareable filters preserve the benchmark context of README gallery links.
const initialBenchmark = new URLSearchParams(location.search).get('benchmark');
if (initialBenchmark) benchmarkButtons.find(b => b.dataset.benchmarkFilter === initialBenchmark)?.click();
const benchmarkObserver = new IntersectionObserver(entries => {
  entries.forEach(({target, isIntersecting}) => {
    if (!isIntersecting) target.pause();
    else if (!target.dataset.metadataRequested) {
      target.dataset.metadataRequested = 'true';
      target.preload = 'metadata';
    }
  });
}, {threshold: 0.05});
benchmarkCards.forEach(card => {
  const video = card.querySelector('video');
  // Native controls remain the no-JS fallback. A quieter cover state keeps
  // browser loading chrome from obscuring the motion before the first play.
  const frame = document.createElement('div');
  frame.className = 'benchmark-media';
  video.before(frame);
  frame.append(video);
  const launch = document.createElement('button');
  launch.type = 'button';
  launch.className = 'benchmark-play';
  launch.setAttribute('aria-label', `Play ${card.querySelector('h3').textContent}`);
  launch.innerHTML = '<span aria-hidden="true">▶</span> Play case';
  frame.append(launch);
  video.controls = false;
  // A single explicit resource reports network failures on the video itself.
  // The <source> stays in the HTML for the no-JavaScript fallback.
  video.src = video.querySelector('source').src;
  launch.addEventListener('click', () => {
    video.controls = true;
    play(video);
  });
  benchmarkObserver.observe(video);
  video.addEventListener('play', () => {
    video.controls = true;
    launch.hidden = true;
    document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
    playVisible = false;
    syncToggle();
  });
});
