import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };

  const [state, dispach] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispach }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
