import React, { useEffect, useState } from "react";
import ServicesItem from "./ServicesItem/ServicesItem";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-500">Services</h3>
        <h1 className="text-4xl font-extrabold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service, idx) => (
          <ServicesItem key={idx} service={service}></ServicesItem>
        ))}
      </div>
    </div>
  );
};

export default Services;
