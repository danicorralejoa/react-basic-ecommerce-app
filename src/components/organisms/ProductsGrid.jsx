import React from "react";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../../helpers/dataTransformations";

const ProductsGrid = ({ product }) => {
  const { id, images, title, price, description } = product;

  return (
    <article className="border-2 border-gray-300 p-4 h-150">
      <Link to={`/products/${id}`}>
        <img src={images[0]} className="w-full h-150 object-cover" />
      </Link>
      <h3 className="my-2">{title}</h3>
      <p> {description}</p>
      <p className="font-bold"> {currencyFormatter(price)}</p>
      <div className="flex-col">
        <button className="bg-blue-500 text-white border-none px-4 py-2 mt-4 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductsGrid;
