import React from "react";
import logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer p-10 mt-10 bg-base-200 text-base-content">
      <div>
        <img src={logo} alt="" />
        <p>
          Edwin Diaz is a software and web <br />
          technologies engineer, a life coach <br />
          trainer who is also a serial .
        </p>
      </div>
      <div>
        <span className="footer-title">About</span>
        <a href="/" className="link link-hover">
          Home
        </a>
        <a href="/" className="link link-hover">
          Services
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="/" className="link link-hover">
          Why Car Dorctor
        </a>
        <a href="/" className="link link-hover">
          About
        </a>
      </div>
      <div>
        <span className="footer-title">Support</span>
        <a href="/" className="link link-hover">
          Support Center
        </a>
        <a href="/" className="link link-hover">
          FeedBack
        </a>
        <a href="/" className="link link-hover">
          Accesbility
        </a>
      </div>
    </footer>
  );
};

export default Footer;
