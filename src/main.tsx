import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './styles/index.css';
import faviconUrl from './assets/Elegant Infinity Logo with Flower (1024 x 1024 px).png';

const faviconLink =
  document.querySelector<HTMLLinkElement>("link[rel='icon']") ?? document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.type = 'image/png';
faviconLink.href = faviconUrl;
if (!faviconLink.parentNode) {
  document.head.appendChild(faviconLink);
}

createRoot(document.getElementById('root')!).render(<App />);
  