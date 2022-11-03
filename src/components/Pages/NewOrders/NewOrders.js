import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const NewOrders = () => {
  const { user } = useContext(AuthContext);
  const handleNewOrders = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleNewOrders} className="p-24 bg-slate-200 rounded-lg">
        <div className="grid grid-cols-2 gap-6">
          <input
            type="text"
            required
            name="service_name"
            placeholder="Service Name"
            className="input input-bordered input-info w-full"
          />
          <input
            type="text"
            required
            name="service_type"
            placeholder="Service Type"
            className="input input-bordered input-info w-full"
          />
          <input
            type="text"
            required
            name="phone"
            placeholder="Phone"
            className="input input-bordered input-info w-full"
          />
          <input
            type="text"
            required
            name="email"
            defaultValue={user?.email}
            placeholder="Email"
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
    </div>
  );
};

export default NewOrders;
