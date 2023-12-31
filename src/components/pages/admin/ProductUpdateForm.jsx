import { ProductCategorySelection } from "../../molecules/header/forms/ProductCategorySelection";
import { Link, useParams } from "react-router-dom";
import useFetchGetRequest from "../../../hooks/useFetchGetRequest";
import useFetchUpdateProduct from "../../../hooks/useFetchUpdateProduct ";
import useCreateProduct from "../../../hooks/useCreateProduct";

export const ProductUpdatenForm = () => {
  const { id } = useParams();
  let data = null;
  let error = null;
  let loading = null;

  if (id) {
    const productsEndpoint = `products/${id}`;
    const results = useFetchGetRequest(productsEndpoint);
    data = results.data;
    error = results.error;
    loading = results.loading;
  }

  const handleForm = (e) => {
    e.preventDefault();
    const selectedOption = e.target.productCategories.selectedOptions[0];
    const categoryId = selectedOption.getAttribute('data-id');
    const data = {
      title: e.target.productName.value,
      price: Number(e.target.productPrice.value),
      images: [e.target.productImage.value],
      description: e.target.productDescription.value,
      categoryId: categoryId,
    };
    console.log(data);

    return id ? useFetchUpdateProduct(data, id) : useCreateProduct(data);
  };

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error loading products: {error.message}</h1>;

  return (
    <>
      <h1>{id ? "Update Products" : "Create Product"}</h1>
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
            defaultValue={data?.title}
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
            defaultValue={data?.price}
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
            defaultValue={data?.images[0]}
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
            defaultValue={data?.description}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <ProductCategorySelection categorySelected={data?.category?.name} />
        <div className="flex items-start mb-6">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {id ? "Update" : "Create"}
          </button>
        </div>
        <Link to="/">Go back to Homepage</Link>
      </form>
    </>
  );
};
