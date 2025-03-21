import { useEffect, useState } from "react"
import CartContext from "../contexts/CartContext"

export const CartProvider = ({ children }) => {
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || []
  const [cartItems, setCartItems] = useState(storedCartItems)

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, product]
      localStorage.setItem("cartItems", JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== productId)
      localStorage.setItem("cartItems", JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}