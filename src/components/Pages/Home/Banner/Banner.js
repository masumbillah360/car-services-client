import React from "react";
import bannerImg1 from "../../../../assets/images/banner/1.jpg";
import bannerImg2 from "../../../../assets/images/banner/2.jpg";
import bannerImg3 from "../../../../assets/images/banner/3.jpg";
import bannerImg4 from "../../../../assets/images/banner/4.jpg";
import bannerImg5 from "../../../../assets/images/banner/5.jpg";
import bannerImg6 from "../../../../assets/images/banner/6.jpg";
import BannerItems from "./BannerItems/BannerItems";

const bannerItems = [
  { id: 1, nxt: 2, prv: 6, img: bannerImg1 },
  { id: 2, nxt: 3, prv: 1, img: bannerImg2 },
  { id: 3, nxt: 4, prv: 2, img: bannerImg3 },
  { id: 4, nxt: 5, prv: 3, img: bannerImg4 },
  { id: 5, nxt: 6, prv: 4, img: bannerImg5 },
  { id: 6, nxt: 1, prv: 5, img: bannerImg6 },
];

const Banner = () => {
  return (
    <div className="carousel w-full py-10 h-screen">
      {bannerItems.map((item, index) => (
        <BannerItems key={index} slider={item}></BannerItems>
      ))}
    </div>
  );
};

export default Banner;
