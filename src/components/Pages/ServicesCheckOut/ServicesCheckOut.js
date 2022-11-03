import React, { useEffect, useState } from "react";
import { FaArrowRight, FaPage4 } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ServicesCheckOut = () => {
  const data = useLoaderData();
  const [catTitle, setCatTitle] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setCatTitle(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  const { _id, img, facility, title, description } = data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="card bg-base-100 shadow-xl md:col-span-8">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <p className="font-bold text-red-500"> Price : ${price}</p> */}

          <p>{description}</p>

          <div className="grid grid-cols1 md:grid-cols-2 gap-6">
            {facility.map((fac) => (
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{fac.name}</h2>
                  <p>{fac.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:col-span-4">
        <div className="bg-slate-300 p-10 rounded-lg">
          <h4 className="text-center font-bold text-xl mb-4 text-orange-600">
            Service
          </h4>
          {catTitle.map((title) => (
            <div className="hover:bg-orange-700 px-2 hover:rounded-lg  hover:text-white hover:font-bold ">
              <Link
                to={`/checkout/${title._id}`}
                className="flex justify-between items-center py-3"
              >
                {title.title} <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-slate-700 mt-10 p-10 rounded-lg text-white">
          <h2 className="font-bold text-xl">Download</h2>
          <div className="flex justify-between mt-5">
            <div className="flex justify-start items-center">
              <FaPage4 />
              <div className="ml-2">
                <h2>Our Brochure</h2>
                <h2>Download</h2>
              </div>
            </div>
            <Link className="btn btn-error hover:text-white">
              <FaArrowRight />
            </Link>
          </div>
          <div className="flex justify-between mt-5">
            <div className="flex justify-start items-center">
              <FaPage4 />
              <div className="ml-2">
                <h2>Company Details</h2>
                <h2>Download</h2>
              </div>
            </div>
            <Link className="btn btn-error hover:text-white">
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl font-extrabold">Price ${data.price}</h1>
          <Link
            to={`/checkout/${_id}`}
            className="btn btn-error w-full mt-2 h-14 rounded-lg bg-orange-700 font-bold text-xl text-white"
          >
            Proceed Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCheckOut;
