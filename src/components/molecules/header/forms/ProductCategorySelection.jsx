import React from "react";
import useFetchProductCategory from "../../../../hooks/useFetchProductCategory";

export const ProductCategorySelection = ({ categorySelected }) => {
  const categoryEndpoint = "/categories";
  const { data, loading } = useFetchProductCategory(categoryEndpoint);

  if (loading) return <p>Loading categories...</p>;

  return (
    <>
      <div className="mb-6">
        <label htmlFor="productCategories">Categories: </label>
        <select
          id="productCategories"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue={data.lenght === 0 ? "NA" : categorySelected}
        >
          {data.lenght === 0 ? (
            <p>No categories available</p>
          ) : (
            data.map((category) => (
              <option key={category.id}>{category.name}</option>
            ))
          )}
        </select>
      </div>
    </>
  );
};
