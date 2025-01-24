import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import './styles/animations.css';
import { initGA } from './utils/analytics';
import { initAds } from './utils/ads';

// Initialize Google Analytics and AdSense
initGA();
initAds();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);