import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../../helpers/dataTransformations";
import { CartContext } from "../../context/CartContext";

const ProductsGrid = ({ product }) => {
  const { id, images, title, price, description } = product;
  const { state, dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  return (
    <article className="border-2 border-gray-300 p-4 h-150">
      <Link to={`/products/${id}`}>
        <img src={images[0]} className="w-full h-150 object-cover" />
      </Link>
      <h3 className="my-2">{title}</h3>
      <p> {description}</p>
      <p className="font-bold"> {currencyFormatter(price)}</p>
      <div className="flex-col">
        {!state.cart.find((e) => e.id === product.id) && (
          <button
            className="bg-blue-500 text-white border-none px-4 py-2 mt-4 cursor-pointer"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
        {state.cart.find((e) => e.id == product.id) && (
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={removeFromCart}
          >
            Remove from Cart
          </button>
        )}
      </div>
    </article>
  );
};

export default ProductsGrid;
