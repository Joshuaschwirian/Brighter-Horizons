const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(returnFocus = false) {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
document.querySelector('#year').textContent = new Date().getFullYear();

const media = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.querySelector('.motion-toggle');
let manualReduction = false;
try { manualReduction = sessionStorage.getItem('bh-reduce-motion') === 'true'; } catch {}
function applyMotionPreference() {
  const reduced = media.matches || manualReduction;
  document.documentElement.classList.toggle('motion-off', reduced);
  motionButton.setAttribute('aria-pressed', String(reduced));
  motionButton.textContent = reduced ? 'Motion reduced' : 'Reduce motion';
  motionButton.disabled = media.matches;
  if (reduced) document.querySelectorAll('.is-pending').forEach(el => el.classList.add('is-visible'));
}
motionButton.addEventListener('click', () => {
  manualReduction = !manualReduction;
  try { sessionStorage.setItem('bh-reduce-motion', String(manualReduction)); } catch {}
  applyMotionPreference();
});
media.addEventListener('change', applyMotionPreference);
applyMotionPreference();

if ('IntersectionObserver' in window && !media.matches && !manualReduction) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top > innerHeight * 0.95) {
      el.classList.add('is-pending');
      observer.observe(el);
    }
  });
}
