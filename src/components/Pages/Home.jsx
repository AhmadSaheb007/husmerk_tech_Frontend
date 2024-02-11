import React from "react";
import Navbar from "./../Shared/Navbar";
import Banner from "./../Shared/Banner";
import Services from "../Shared/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />

      <div className="bg">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 text-center">
              <p className="fs-1 text-light">Services</p>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-lg-5 my-3">
                <Services serviceTitle = "App Development" serviceDescription = "Make Dynamic and Elegent App for your University, School &  Corporate"/>
            </div>

            <div className="col-lg-5 my-3">
                <Services serviceTitle = "Web Development" serviceDescription = "Make Dynamic and Elegent App for your University, School &  Corporate"/>
            </div>

            <div className="col-lg-5 my-3">
                <Services serviceTitle = "Digital Markting" serviceDescription = "Markting & Branding on Digital Platforms, And grow your Business"/>
            </div>

            <div className="col-lg-5 my-3">
                <Services serviceTitle = "Graphic Design" serviceDescription = "Make Dynamic and Elegent Graphics for your University, School &  Corporate"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
