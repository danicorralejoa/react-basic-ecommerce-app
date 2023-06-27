import React from "react";
import getRequest from "../../hooks/getRequest";

const Products = () => {
  const productsEndpoint = "public/products";
  const { data, error, loading } = getRequest(productsEndpoint);

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h1>Erro loading products</h1>;

  return (
    <>
      <h1>Our products</h1>
      {data.lenght === 0 ? (
        <p>No products to show</p>
      ) : (
        data.map((product) => (
          <div key={product.id}>
            <h1>Product Name: {product.product_name}</h1>
          </div>
        ))
      )}
    </>
  );
};

export default Products;
