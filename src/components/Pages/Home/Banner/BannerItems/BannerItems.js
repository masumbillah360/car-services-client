import React from "react";
import { Link } from "react-router-dom";
import "./BannerItems.css";

const BannerItems = ({ slider }) => {
  const { id, nxt, prv, img } = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="banner-img">
        <img src={img} className="w-full h-full rounded-lg" alt="banner-img" />
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable
          <br />
          Price For
          <br /> Car Servicing
        </h1>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-2/4">
        <h1 className="text-xl font-bold text-white lg:pr-96">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </h1>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-3/4">
        <Link className="btn bg-orange-600 text-white mr-4" to="/">
          Discover More
        </Link>
        <Link className="btn btn-outline text-white" to="/">
          Latest Project
        </Link>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prv}`} className="btn btn-circle mr-4">
          ❮
        </a>
        <a href={`#slide${nxt}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
