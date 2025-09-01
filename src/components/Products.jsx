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
        <div key={product.id} className="product-card">
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
          <button
            className="delete-btn"
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
