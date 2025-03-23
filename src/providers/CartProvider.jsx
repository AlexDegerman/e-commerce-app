import { useEffect, useState } from "react"
import CartContext from "../contexts/CartContext"

export const CartProvider = ({ children }) => {
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || []
  const [cartItems, setCartItems] = useState(storedCartItems)

  // Adds a product to the cart, updating its quantity if already in the cart, or adding it as a new item.
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id)
      
      let updatedItems
      
      if (existingItemIndex >= 0) {
        updatedItems = [...prevItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: (updatedItems[existingItemIndex].quantity || 1) + (product.quantity || 1)
        }
      } else {
        const newItem = {
          ...product,
          quantity: product.quantity || 1
        }
        updatedItems = [...prevItems, newItem]
      }
      
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

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map(item => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity }
        }
        return item
      })
      localStorage.setItem("cartItems", JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem("cartItems")
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider value={{ 
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}