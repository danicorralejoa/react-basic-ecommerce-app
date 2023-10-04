import React from "react";
import useFetchGetRequest from "../../hooks/useFetchGetRequest";
import ProductsGrid from "../organisms/ProductsGrid";

const Products = () => {
  const productsEndpoint = "public/products";
  const { data, error, loading } = useFetchGetRequest(productsEndpoint);

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error loading products: {error.message}</h1>;

  return (
    <section className="py-16 max-w-256 m-auto">
      <h1 className="text-3xl mb-6">Explore our products</h1>
      <div className="grid grid-cols-4 gap-6">
        {data === null ? (
          <p>No products to show</p>
        ) : (
          data.map((product) => (
            <ProductsGrid key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
};

export default Products;
