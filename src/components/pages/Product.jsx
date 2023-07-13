import React from "react";
import useFetchGetRequest from "../../hooks/useFetchGetRequest";
import { useParams } from "react-router-dom";
import { currencyFormatter } from "../../helpers/dataTransformations";

const ProductDetailPage = () => {
  const { id } = useParams();
  const productsEndpoint = `products/${id}`;
  const { data, error, loading } = useFetchGetRequest(productsEndpoint);

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error loading products: {error.message}</h1>;

  return (
    <div className="flex flex-col md:flex-row justify-center items-start p-4">
      <div className="md:w-1/2">
        <img
          src={data.images[0]}
          alt={data.title}
          className="w-full h-auto mb-4"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-700 mb-4">{data.description}</p>
        <div className="flex items-center mb-4">
          <span className="text-lg font-bold mr-2">
            {currencyFormatter(data.price)}
          </span>
          <span className="text-gray-600">In Stock</span>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;