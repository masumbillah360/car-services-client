import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const serviceData = useLoaderData();
  const navigate = useNavigate();
  const { title, price, img } = serviceData;
  console.log(serviceData);
  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.firstName.value;
    const lName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const serviceInfo = {
      name: `${fName} ${lName}`,
      email,
      phone,
      title,
      price,
      img,
      message,
    };
    fetch("http://localhost:5000/userservices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceInfo),
    });
    console.log(serviceInfo);
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
          defaultValue={user?.email}
          readOnly
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
