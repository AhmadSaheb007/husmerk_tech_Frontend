import React from "react";
import Navbar from "./../Shared/Navbar";
import Banner from "./../Shared/Banner";
import Services from "../Shared/Services";
import Footer from "../Shared/Footer";
import ServiceSection from "../Shared/ServiceSection";
import Plans from './../Shared/Plans';
import Sliders from "../Shared/Sliders";
import Contact from './../Shared/Contact';




const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />

      <div className="bg">
        <ServiceSection/>
        <Plans/>
        <Sliders/>
        <Contact 
        accordionTitle1 = "Why Should you choose us?"
        accordionTitle2 = "Our Tools and Hosting Services"
        accordionTitle3 = "Leave it to us, Take a nap" />

        
        
        
      </div>


      <Footer/>
    </div>
  );
};

export default Home;
