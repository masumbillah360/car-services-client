import React from "react";
import { FaStar } from "react-icons/fa";

const ProductItem = ({ product }) => {
  const { name, price, thumbnail, rating } = product;
  return (
    <div className="card shadow-xl">
      <figure className="px-10 pt-10">
        <img src={thumbnail} alt="products" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <div className="flex">
          {rating.map((rat, idx) => (
            <FaStar key={idx} className="text-yellow-500"></FaStar>
          ))}
        </div>
        <h2 className="card-title">{name}</h2>
        <div className="card-actions">
          <p className="font-bold text-orange-600">Price : ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
