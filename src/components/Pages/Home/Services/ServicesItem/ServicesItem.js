import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicesItem = ({ service }) => {
  const { name, price, thumbnail } = service;
  return (
    <div className="card card-compact p-6 shadow-xl">
      <figure>
        <img className="rounded-lg h-52" src={thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-xl text-orange-600">
            Price : ${price}
          </h4>
          <button className="btn btn-outline text-orange-600 hover:bg-orange-600 hover:text-white">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
