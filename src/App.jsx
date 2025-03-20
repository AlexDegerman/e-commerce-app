import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import HomePage from './components/HomePage'

const App = () => {


  return (
    <div className="app-container">
      <Header/>
      <Routes>
        <Route path="/product-list" element={<ProductList/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
