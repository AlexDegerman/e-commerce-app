import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './providers/ProductProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  </StrictMode>,
)
