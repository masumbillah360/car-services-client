import React from "react";
import parts from "../../../../assets/images/about_us/parts.jpg";
import person from "../../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div id="about-section" className="hero">
      <div className="hero-content">
        <div className="relative w-1/2">
          <img
            src={person}
            alt=""
            className="rounded-lg shadow-2xl w-4/5 h-full"
          />
          <img
            src={parts}
            alt="parts"
            className="absolute top-1/2 right-5 2 w-3/5 border-8 rounded-lg border-white"
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-xl font-bold text-orange-500">About US</h3>
          <h1 className="text-5xl font-bold my-5">
            We are qualified <br /> & of experience <br />
            in this field
          </h1>
          <p className="p-0">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <button className="btn bg-orange-600 text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
