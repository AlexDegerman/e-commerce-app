import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  
  return (
    <div className="header">
      <Link to="/" className="header-link"><h1>eCommerceApp</h1></Link>
      <Link to="/product-list" className="header-link"><h2>Products</h2></Link>
      <h2>Cart</h2>
    </div>
  )
}

export default Header