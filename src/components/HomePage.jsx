import promotedProducts from "../data/promotedProducts.json";
import featuredProducts from "../data/featuredProducts.json";
import "../styles/HomePage.css";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promotedProducts.length)
    }, 5000)

    return () => clearInterval(interval)
  },[])

  return (
    <div className="home-page-container">
      <div
        className="promoted-products-carousel"
        style={{
          backgroundImage: `url(${promotedProducts[currentIndex].image})`,
        }}
      >
        <div className="carousel-overlay">
          <h2>{promotedProducts[currentIndex].name}</h2>
          <p>${promotedProducts[currentIndex].price}</p>
        </div>
      </div>

      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="featured-products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
            <img src={product.image} alt="product-name" className="product-image"/>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage