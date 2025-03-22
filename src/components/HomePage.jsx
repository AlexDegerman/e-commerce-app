import promotedProducts from "../data/promotedProducts.json";
import featuredProducts from "../data/featuredProducts.json";
import "../styles/HomePage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % promotedProducts.length
        );
        setIsTransitioning(false);
      }, 400)
    }, 5000)
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page-container">
      <Link to={`/product/${promotedProducts[currentIndex].id}`} className="product-link">
        <div
          className={`promoted-products-carousel ${isTransitioning ? 'carousel-transitioning' : 'carousel-visible'}`}
          style={{
            backgroundImage: `url(${promotedProducts[currentIndex].image})`,
          }}
        >
          <div className="carousel-overlay">
            <h2>{promotedProducts[currentIndex].name}</h2>
            <p>${promotedProducts[currentIndex].price}</p>
          </div>
        </div>
      </Link>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="featured-products-grid">
          {featuredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-link">
              <div className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/product-list" className="more-products"><p className="more-products-message">More products</p></Link>
      </div>
    </div>
  )
}

export default HomePage