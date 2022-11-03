import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesItem = ({ service }) => {
  const { _id, title, price, img } = service;
  return (
    <div className="card card-compact p-6 shadow-xl">
      <figure>
        <img className="rounded-lg h-52" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-xl text-orange-600">
            Price : ${price}
          </h4>
          <Link
            to={`services/${_id}`}
            className="btn btn-outline text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
