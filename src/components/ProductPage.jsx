import { useParams } from "react-router-dom"
import "../styles/ProductPage.css"
import { CheckCircle, DollarSign, ShoppingCart, Truck } from "lucide-react"
import { useProduct } from "../hooks/useProduct"
import { useCart } from "../hooks/useCart"
import { useState} from "react"

const ProductPage = () => {
  const { index } = useParams()
  const { products } = useProduct()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [showNotification, setShowNotification] = useState(false)
  
  const product = Object.values(products)
    .flat()
    .find((p) => p.id === parseInt(index))
    
  if (!product) {
    return <div className="not-found">Product not found</div>
  }
  
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + 3)
  const formattedDate = currentDate.toLocaleDateString()
  const stockAmount = Math.floor(Math.random() * (200 - 100 + 1)) + 100
  
  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value))
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity
    })
    
    setShowNotification(true)
    
    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }
  
  return (
    <div className="product-page-container">
      {/* Notification popup */}
      {showNotification && (
        <div className="notification">
          <CheckCircle color="white" size={16} />
          <span>{quantity}x {product.name} added to cart!</span>
        </div>
      )}
      {/* Product details and add to cart */}
      <h1 className="product-title">{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-page-image" />
      <div className="product-details">
        <div className="product-description">
          <p>{product.description}</p>
        </div>
        <div className="product-info">
          <p><DollarSign color="green" size="20px"/><strong>Price: ${product.price}</strong></p>
          <p> <CheckCircle color="green" size="20px"/>Stock availability: {stockAmount} </p>
          <p><Truck color="blue" size="20px"/>Estimated delivery: {formattedDate} </p>
          <label htmlFor="quantity">Quantity: </label>
          <select
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
          >
            {[...Array(10).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
          <p><ShoppingCart color="#5a2ca0" size="20px"/><button onClick={handleAddToCart} className="add-to-cart-button">Add to cart</button></p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage