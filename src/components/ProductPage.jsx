import { useParams } from "react-router-dom";
import electronics from "../data/electronics.json";
import clothing from "../data/clothing.json";
import homeDecor from "../data/homeDecor.json";
import sportsOutdoors from "../data/sportsOutdoors.json";
import beauty from "../data/beauty.json";
import toys from "../data/toys.json";
import books from "../data/books.json";
import groceries from "../data/groceries.json";
import "../styles/ProductPage.css";
import { CheckCircle, ShoppingCart, Truck } from "lucide-react";

const allProducts = [
  ...electronics,
  ...clothing,
  ...homeDecor,
  ...sportsOutdoors,
  ...beauty,
  ...toys,
  ...books,
  ...groceries,
]

const ProductPage = () => {
  const { index } = useParams()
  const product = allProducts.find((p) => p.id === parseInt(index))

  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + 3)
  const formattedDate = currentDate.toLocaleDateString()

  const stockAmount = Math.floor(Math.random() * (200 - 100 + 1)) + 100;

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="product-page-container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <p> <CheckCircle color="green" />Stock availability: {stockAmount} </p>
      <p><Truck color="blue" />Estimated delivery: {formattedDate} </p>
      <p><ShoppingCart/>Add to cart</p>
    </div>
  )
}

export default ProductPage