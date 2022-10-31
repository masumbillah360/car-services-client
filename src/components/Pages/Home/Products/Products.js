import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem/ProductItem";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-500">Popular Products</h3>
        <h1 className="text-4xl font-extrabold my-4">Browse Our Products</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductItem key={product.id} product={product}></ProductItem>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="btn btn-outline btn-error">More Products</button>
      </div>
    </div>
  );
};

export default Products;
