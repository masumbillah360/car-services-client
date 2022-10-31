import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  return (
    <div className="my-32 grid grid-cols-1 md:grid-cols-3 bg-slate-800 py-24 px-16 text-white rounded-lg">
      <div className="flex justify-start items-center">
        <span className="text-5xl mr-5 text-orange-600">
          <FaRegClock></FaRegClock>
        </span>
        <div>
          <p>We are open monday-friday</p>
          <h2 className="text-xl font-bold">7:00 am - 9:00 pm</h2>
        </div>
      </div>
      <div className="flex justify-start items-center">
        <span className="text-5xl mr-5 text-orange-600">
          <FiPhoneCall></FiPhoneCall>
        </span>
        <div>
          <p>Have a question?</p>
          <h2 className="text-xl font-bold">+2546 251 2658</h2>
        </div>
      </div>
      <div className="flex justify-start items-center">
        <span className="text-5xl mr-5 text-orange-600">
          <ImLocation2></ImLocation2>
        </span>
        <div>
          <p>Need a repair? our address</p>
          <h2 className="text-xl font-bold">Liza Street, New York</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
