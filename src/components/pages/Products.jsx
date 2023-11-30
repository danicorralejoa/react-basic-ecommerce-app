import React, { useEffect, useState } from "react";
import useFetchGetRequest from "../../hooks/useFetchGetRequest";
import ProductsGrid from "../organisms/ProductsGrid";

const Products = () => {
  const { data, error, loading } = useFetchGetRequest("public/products");
  const [result, setResult ] = useState([])

  useEffect(() => {
    if(Object.keys(data).length != 0) {
      setResult(data)
    }
    },[data]);

  const handleFilter = (e) => {
    const filterValue = e.target.value.toLocaleLowerCase();
    
    setResult(
      data.filter((p) => 
        JSON.stringify(p).toLocaleLowerCase().includes(filterValue)
        )
    )
  }

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error loading products: {error.message}</h1>;

  return (
    <section className="py-16 max-w-256 m-auto">
<h1 className="text-3xl mb-6">Explore our products</h1>
      <input type="text" 
        placeholder="Filter Products" 
        className="mb-6 bg-gray-50 border border-gray-300"
        onChange={handleFilter}/>
      <div className="grid grid-cols-4 gap-6">
        {result.length === 0 ? (
          <p>No products to show</p>
        ) : (
          result.map((product) => (
            <ProductsGrid key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
};

export default Products;
