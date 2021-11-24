import React from "react";

import useWindowWidth from "../hooks/useWindowWidth";

import Header from "./Header";
import FirstSlider from "./FirstSlider";
import SecondSlider from "./SecondSlider";
import Features from "./Features";
import Discount from "./Discount";
import Products from "./Products";
import NewBestFeatured from "./NewBestFeatured";
import BrandSlider from "./BrandSlider";
import OurClient from "./OurClient";
import Facilities from "./Facilities";
import Footer from "./Footer";

import Banner4 from "../assets/images/id-9-banner-1.jpg";
import Banner5 from "../assets/images/id-9-banner-2.jpg";
import Banner6 from "../assets/images/id-9-banner-3.jpg";
import Banner7 from "../assets/images/id-9-banner-4.jpg";

const Main = () => {
  // from the custom hook in the util folder
  let viewportWidth = useWindowWidth(); // returns the current viewport width
  // console.log(`${viewportWidth}`);
  return (
    <>
      <Header />
      {/* <!-- Main Section --> */}
      <main>
        <FirstSlider />
        <SecondSlider viewportWidth={viewportWidth} />
        <hr className="hr mx-3" />
        <Features viewportWidth={viewportWidth} />
        <Discount />
        <Products viewportWidth={viewportWidth} />
        {/* Images Grid */}
        <div className="container-fluid container-lg my-5">
          <div className="d-flex flex-row flex-wrap justify-content-center">
            <div className="col-12 col-md-8 d-flex pe-md-2 flex-column mb-3">
              <img src={Banner4} className="img-fluid" alt="Banner 1" />
            </div>
            <div className="col-12 col-sm-6 col-sm col-md-4 d-flex flex-column mb-3 mb-md-0 pe-sm-2 pe-md-0 ps-md-2">
              <img src={Banner5} className="img-fluid" alt="Banner 2" />
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex flex-column mb-3 mb-md-0 ps-sm-2 ps-md-0 pe-md-2">
              <img src={Banner6} className="img-fluid" alt="Banner 3" />
            </div>
            <div className="col-12 col-md-8 d-flex flex-column ps-md-2">
              <img src={Banner7} className="img-fluid" alt="Banner 4" />
            </div>
          </div>
        </div>
        <NewBestFeatured />
        <BrandSlider viewportWidth={viewportWidth} />
        <OurClient viewportWidth={viewportWidth} />
        <Facilities />
      </main>
      {/* <!-- /Main Section --> */}
      <Footer />
    </>
  );
};

export default Main;
