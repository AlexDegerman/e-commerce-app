import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './providers/ProductProvider.jsx'
import { CartProvider } from './providers/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <Router basename="/e-commerce-app">
          <App />
        </Router>
      </CartProvider>
    </ProductProvider>
  </StrictMode>,
)
