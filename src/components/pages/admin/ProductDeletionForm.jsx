import React from "react";
import useFetchGetRequest from "../../../hooks/useFetchGetRequest";
import { currencyFormatter } from "../../../helpers/dataTransformations";
import { useNavigate } from "react-router-dom";

const ProductDeletionForm = () => {
  const productsEndpoint = "products";
  const { data, error, loading } = useFetchGetRequest(productsEndpoint);
  const navigate = useNavigate();

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error loading products: {error.message}</h1>;

  const handleDeleteButton = (id) => {
    const confirmMesseage = confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmMesseage) {
      console.log(id);
      navigate("/");
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Delete Product
              </th>
            </tr>
          </thead>
          <tbody>
            {data.lenght === 0 ? (
              <p>No products to show</p>
            ) : (
              data.map((product) => (
                <>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {product.id}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {product.title}
                    </th>
                    <td className="px-6 py-4">{product.category.name}</td>
                    <td className="px-6 py-4">
                      {currencyFormatter(product.price)}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        onClick={() => handleDeleteButton(product.id)}
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductDeletionForm;
