import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'

const App = () => {


  return (
    <div className="app-container">
      <Header/>
      <Routes>
        <Route path="/product-list" element={<ProductList/>}/>
      </Routes>
    </div>
  )
}

export default App
