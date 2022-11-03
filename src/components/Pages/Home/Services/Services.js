import React, { useEffect, useState } from "react";
import ServicesItem from "./ServicesItem/ServicesItem";

const Services = () => {
  const [services, setServices] = useState([]);
  // console.log(services);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-500">Services</h3>
        <h1 className="text-4xl font-extrabold my-4">Our Service Area</h1>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServicesItem key={service._id} service={service}></ServicesItem>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="btn btn-outline btn-error">More Services</button>
      </div>
    </div>
  );
};

export default Services;
