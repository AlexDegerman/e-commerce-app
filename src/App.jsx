import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import HomePage from './components/HomePage'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'

const App = () => {


  return (
    <div className="app-container">
      <Header/>
      <div className="main-content">
        <Routes>
          <Route path="/product-list" element={<ProductList/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/product/:index" element={<ProductPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
