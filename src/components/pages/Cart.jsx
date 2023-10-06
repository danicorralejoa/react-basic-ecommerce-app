import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { currencyFormatter } from "../../helpers/dataTransformations";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants/env";
import { token } from "../../helpers/auth";
import PayPalPayment from "../organisms/PayPalPayment";

const Cart = () => {
  const contextValue = useContext(CartContext);
  const cartItems = contextValue.state.cart;
  const { state, dispatch } = useContext(CartContext);
  const [ order, setOrder ] = useState()
  let cartValue = 0;
  state.cart.forEach((c) => (cartValue += c.price))

  const removeFromCart = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
  };


  const handleOrder = () => {
    const products = state.cart.map((p) => {
      return {
          product_id: p.id,
          amount: 1, //Always 1 as user can not buy multiple products
          unit_price: p.price
      }
    })

    const data = {
      products
    }

    axios.post(`${API_URL}/private/purchase-orders`, data,{
      headers: { 
        Authorization: `Bearer ${token()}`}}).then( res => {
          setOrder(res.data.data);
          console.log(res)
        } ).catch((err) => console.log(err))
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {console.log(cartValue)}
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border p-4 rounded-lg shadow-lg bg-white"
                >
                  <div>
                    <img
                      src={item.images[0]}
                      alt={item.product_name}
                      className="w-24 h-24 object-cover mx-auto mb-2"
                    />
                    <h2 className="text-lg font-semibold mb-2">{item.product_name}</h2>
                    <p className="text-gray-600">
                      {currencyFormatter(item.price)}
                    </p>
                    <button
                      className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove Product
                    </button>
                  </div>
                </div>
          ))}
              {
                (!order) ? (
                <button className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleOrder}>
                  Purchase
                </button>)
                : (
                  <>
                    <p>Order Created Id: {order.id}</p>
                    <PayPalPayment order = {order} value = {cartValue} />
                  </>
                )
              }
            </div>
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
