import React from "react";

const ProductsGrid = ({ product }) => {
  const { images, product_name, id, price, description } = product;

  return (
    <article className="border-2 border-gray-300 p-4 h-150">
      <img src={images[0]} className="w-full h-150 object-cover" />
      <h3 className="my-2">{product_name}</h3>
      <p> {description}</p>
      <p className="font-bold"> {price}$</p>
      <button className="bg-blue-500 text-white border-none px-4 py-2 mt-4 cursor-pointer">
        Add to Cart
      </button>
    </article>
  );
};

export default ProductsGrid;
