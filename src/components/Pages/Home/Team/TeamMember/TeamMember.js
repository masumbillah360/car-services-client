import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamMember = ({ memberInfo }) => {
  const { thumbnail, name, position } = memberInfo;
  return (
    <div className="card shadow-xl">
      <figure className="px-10 pt-10">
        <img src={thumbnail} alt="products" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{position}</p>
        <div className="card-actions">
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
          <FaInstagram></FaInstagram>
          <FaLinkedin></FaLinkedin>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
