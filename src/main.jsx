import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Metto BrowserRouter attorno ad App, altrimenti Routes e Link non funzionano */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
