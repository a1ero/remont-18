import React from "react";
import CarouselSlide from "../components/CarouselSlide";
import Footer from "../components/Footer";
import Product from "../components/Product"
import Service from "../components/Service";


function Home () {

  return(
    <div>
      <div><CarouselSlide/></div>
      <br/>
      <div><Product/></div>
      <div><Service/></div>
      <div><Footer/></div>
    </div>
  );

};

export default Home;