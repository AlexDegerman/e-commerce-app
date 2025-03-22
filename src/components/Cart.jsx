import { Link } from "react-router-dom"
import { useCart } from "../hooks/useCart"
import "../styles/Cart.css"

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart()

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)

  if (cartItems.length === 0) {
    return <div className="empty-cart-message">Your cart is empty!</div>
  }

  return (
    <div className="cart-container">
    <h1>Your Cart</h1>
    {cartItems.map((item) => (
      <div key={item.id} className="cart-item">
        <Link to={`/product/${item.id}`}>
          <img src={item.image} alt={item.name} className="cart-image" />
        </Link>
        <Link to={`/product/${item.id}`} className="item-name">
          <h3>{item.name}</h3>
        </Link>
        <div className="item-price-details">
          <p>${item.price} each</p>
          <div className="quantity-info">Qty: {item.quantity || 1}</div>
          <div className="subtotal">Subtotal: ${((item.price * (item.quantity || 1)).toFixed(2))}</div>
        </div>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    ))}
     <button className="clear-cart-button" onClick={clearCart}>Remove all</button>
    <div className="cart-total">
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  </div>
  )
}

export default Cart