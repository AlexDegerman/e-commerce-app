import electronics from "../data/electronics.json";
import clothing from "../data/clothing.json";
import homeDecor from "../data/homeDecor.json";
import sportsOutdoors from "../data/sportsOutdoors.json";
import beauty from "../data/beauty.json";
import toys from "../data/toys.json";
import books from "../data/books.json";
import groceries from "../data/groceries.json";
import { useState } from "react";
import ProductContext from "../contexts/ProductContext";

const allProducts = {
  Electronics: electronics,
  Clothing: clothing,
  "Home Decor": homeDecor,
  "Sports & Outdoors": sportsOutdoors,
  "Beauty & Personal Care": beauty,
  "Toys & Games": toys,
  Books: books,
  Groceries: groceries,
}

export const ProductProvider = ({ children }) => {
  const [products] = useState(allProducts)

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}