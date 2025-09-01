import React from "react";

function ProductInfo({ product, onDelete }) {
  return (
    <div className="">
      <div>
        <h3 className="">{product.name}</h3>
        <p className="text-gray-600 mt-2">{`$${product.price}`}</p>
      </div>

      <button
        onClick={() => onDelete(product.id)}
        className=""
      >
        Delete
      </button>
    </div>
  );
}

export default ProductInfo;
