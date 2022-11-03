import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const serviceData = useLoaderData();
  const navigate = useNavigate();
  console.log(serviceData);
  const handleCheckOut = (e) => {
    e.preventDefault();
    navigate("/newoerders");
  };
  return (
    <form onSubmit={handleCheckOut} className="p-24 bg-slate-200 rounded-lg">
      <div className="grid grid-cols-2 gap-6">
        <input
          type="text"
          required
          name="firstName"
          placeholder="First Name"
          className="input input-bordered input-info w-full"
        />
        <input
          type="text"
          required
          name="lastName"
          placeholder="Last Name"
          className="input input-bordered input-info w-full"
        />
        <input
          type="text"
          required
          name="phone"
          placeholder="Your Phone"
          className="input input-bordered input-info w-full"
        />
        <input
          type="text"
          required
          name="email"
          placeholder="Your Email"
          className="input input-bordered input-info w-full"
        />
      </div>
      <textarea
        className="textarea textarea-success w-full mt-10"
        placeholder="Your Message"
        name="message"
        rows="4"
      ></textarea>
      <input
        className="btn btn-error w-full text-white hover:bg-orange-600 mt-6"
        type="submit"
        value="Order Confirm"
      />
    </form>
  );
};

export default CheckOut;
