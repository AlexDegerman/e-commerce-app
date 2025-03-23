import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useCart } from "../hooks/useCart";

const Header = () => {
  const {cartItems} = useCart()

  return (
    <div className="header">
      <Link to="/" className="header-link"><h1>eCommerceApp</h1></Link>
      <Link to="/product-list" className="header-link"><h2>Products</h2></Link>
      <Link to="/cart" className="header-link"><h2>Cart {cartItems.length > 0 && cartItems.length}</h2>
      </Link>
    </div>
  )
}

export default Header