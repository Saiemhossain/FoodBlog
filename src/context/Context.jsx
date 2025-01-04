/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import {  createContext, useContext, useState } from "react"

export const CartContext = createContext()

  const Context = ({children}) => {
  const [cart, setCart] = useState([]);
    return (
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    );
 
}

export const cartState = () => {
  return useContext(CartContext)
}

export default Context