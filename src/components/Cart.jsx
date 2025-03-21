import { useCart } from "../hooks/useCart"
import "../styles/Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart()

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

  if (cartItems.length === 0) {
    return <div className="empty-cart-message">Your cart is empty!</div>
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
      ))}
      <div className="cart-total">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default Cart