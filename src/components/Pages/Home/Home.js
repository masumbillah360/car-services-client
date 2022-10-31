import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Products></Products>
      <Team></Team>
    </div>
  );
};

export default Home;
