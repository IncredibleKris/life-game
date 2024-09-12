import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './task12';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);