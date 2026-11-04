import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Hand-off from the HTML loader to the app. Adding .loaded lifts the loader and
// starts the hero entrance. On a first visit we keep the loader up until the star
// has finished drawing (~1.3s after navigation), even if the app loaded faster.
const MIN_INTRO_MS = 1300;
const html = document.documentElement;
if (window.location.hash) html.classList.add('render-all');

requestAnimationFrame(() => {
  const wait = html.dataset.intro === 'play' ? Math.max(0, MIN_INTRO_MS - performance.now()) : 0;
  setTimeout(() => {
    html.classList.add('loaded');
    try {
      sessionStorage.setItem('intro-seen', '1');
    } catch {
      // Storage blocked: the intro will simply replay next time
    }
  }, wait);
});

// In-page links (#work, #contact...) need real section heights to land precisely.
// The click handler runs before the browser performs the jump, so switching off the
// render deferral here means the scroll target is calculated from the real layout.
document.addEventListener('click', (e) => {
  if (e.target.closest('a[href^="#"]')) html.classList.add('render-all');
});
