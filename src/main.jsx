import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importamos BrowserRouter
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Aquí envuelves la app con BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
