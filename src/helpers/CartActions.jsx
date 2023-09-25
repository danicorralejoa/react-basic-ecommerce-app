import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const { dispach } = useContext(CartContext);

export const removeFromCart = (itemId) => {
  dispach({
    type: "REMOVE_FROM_CART",
    payload: itemId,
  });
};
