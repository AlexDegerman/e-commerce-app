import { useMemo, useState } from "react";
import "../styles/ProductList.css";
import { Link } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

const categories = ["All", "Electronics", "Clothing", "Home Decor", "Sports & Outdoors", "Beauty & Personal Care", "Toys & Games", "Books", "Groceries"]

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const { products } = useProduct()

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const productsToDisplay = useMemo(() => {
    if (selectedCategory === "All") {
      return Object.values(products).flat()
    }
    return products[selectedCategory]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedCategory])

  return (
    <div className="product-list">
      <div className="category-selector">
        <label htmlFor="category-select">Filter by category: </label>
        <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {productsToDisplay.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-link">
            <div className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}x
      </div>
    </div>
  )
}

export default ProductList