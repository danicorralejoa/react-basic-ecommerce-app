import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { currencyFormatter } from "../../helpers/dataTransformations";
import { Link } from "react-router-dom";

const Cart = () => {
  const contextValue = useContext(CartContext);
  const cartItems = contextValue.state.cart;
  const { dispatch } = useContext(CartContext);

  const removeFromCart = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow-lg bg-white"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-24 h-24 object-cover mx-auto mb-2"
                />
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600">{currencyFormatter(item.price)}</p>
                <button
                  className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
                  onClick={() => removeFromCart(item)}
                >
                  Remove Product
                </button>
              </div>
            ))
          ) : (
            <>
              <p>Cart is empty</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                <Link to="/products">See Products</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
