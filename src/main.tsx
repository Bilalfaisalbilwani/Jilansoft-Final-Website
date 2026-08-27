import { Toaster } from "react-hot-toast";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster
  position="top-right"
  reverseOrder={false}
  toastOptions={{
    duration: 4000,
    style: {
      background: '#111128',
      color: '#fff',
      border: '1px solid rgba(168, 85, 247, 0.2)',
      borderRadius: '12px',
    },
    success: {
      iconTheme: {
        primary: '#22c55e',
        secondary: '#fff',
      },
    },
    error: {
      iconTheme: {
        primary: '#ef4444',
        secondary: '#fff',
      },
    },
  }}
/>
  </StrictMode>,
);