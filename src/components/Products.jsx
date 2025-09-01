import React, { useState } from "react";
import ProductInfo from "./ProductInfo.jsx";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductInfo
          key={product.id}
          product={product}
          onDelete={deleteProduct}
        />
      ))}
    </div>
  );
}

export default Products;
