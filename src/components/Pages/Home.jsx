import React from "react";
import Navbar from "./../Shared/Navbar";
import Banner from "./../Shared/Banner";
import Services from "../Shared/Services";
import Footer from "../Shared/Footer";
import ServiceSection from "../Shared/ServiceSection";
import Plans from './../Shared/Plans';
import Sliders from "../Shared/Sliders";




const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />

      <div className="bg">
        <ServiceSection/>
        <Plans/>
        <Sliders/>

        
        
        
      </div>


      <Footer/>
    </div>
  );
};

export default Home;
