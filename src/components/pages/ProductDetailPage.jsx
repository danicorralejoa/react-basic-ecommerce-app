import React, { useContext } from "react";
import useFetchGetRequest from "../../hooks/useFetchGetRequest";
import { useParams } from "react-router-dom";
import { currencyFormatter } from "../../helpers/dataTransformations";
import { CartContext } from "../../context/CartContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(CartContext);
  const productsEndpoint = `public/products/${id}`;
  const { data, error, loading } = useFetchGetRequest(productsEndpoint);

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error loading products: {error.message}</h1>;

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: data,
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: data,
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start p-4">
      <div className="md:w-1/2">
        <img
          src={data.images[0]}
          alt={data.product_name}
          className="w-full h-auto mb-4"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h1 className="text-2xl font-bold mb-4">{data.product_name}</h1>
        <p className="text-gray-700 mb-4">{data.description}</p>
        <div className="flex items-center mb-4">
          <span className="text-lg font-bold mr-2">
            {currencyFormatter(data.price)}
          </span>
          <span className="text-gray-600">In Stock</span>
        </div>
        {!state.cart.find((e) => e.id == data.id) && (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
        {state.cart.find((e) => e.id == data.id) && (
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={removeFromCart}
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
