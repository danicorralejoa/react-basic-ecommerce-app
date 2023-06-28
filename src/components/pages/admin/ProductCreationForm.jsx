import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../../../constants/env";
import { token } from "../../../helpers/auth";

export const ProductCreationForm = () => {
  //const [form, setForm] = useState({});
  const [error, setError] = useState();

  const handleForm = (e) => {
    e.preventDefault();

    const data = {
      product_name: e.target.productName.value,
      price: Number(e.target.productPrice.value),
      images: [e.target.productImage.value],
      description: e.target.productDescription.value,
      features: { color: e.target.productFeaturesColor.value },
    };

    axios
      .post(`${API_URL}/api/v1/admin/products`, data, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then((response) => {
        console.warn(response);
        alert("Product Created!");
      })
      .catch((err) => {
        setError(err);
        alert(err);
      });
    return { error };
  };

  return (
    <form onSubmit={handleForm}>
      <div className="mb-6">
        <label
          htmlFor="productName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          placeholder="Seat Arona"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="productPrice"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Price:{" "}
        </label>
        <input
          type="number"
          id="productPrice"
          placeholder="10000"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="productImage"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          URL Imagen:{" "}
        </label>
        <input
          type="url"
          id="productImage"
          placeholder="https://lorempixel.com/200x200"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="productDescription"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Product Description:{" "}
        </label>
        <input
          type="text"
          id="productDescription"
          placeholder="Este vehículo cuenta con..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="productFeaturesColor">Features: </label>
        <input
          type="text"
          id="productFeaturesColor"
          placeholder="Amarillo"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="flex items-start mb-6">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit Product
        </button>
      </div>
    </form>
  );
};
