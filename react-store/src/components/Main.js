/* eslint-disable no-undef */
import React, { useEffect } from "react";
import $ from "jquery";
import "slick-carousel";

import Header from "./Header";
import Footer from "./Footer";
import Banner1 from "../assets/images/item-1.jpg";
import Banner2 from "../assets/images/item-2.jpg";
import Banner3 from "../assets/images/item-3.jpg";
import Product1 from "../assets/images/id-9-cat-1.jpg";
import Product2 from "../assets/images/id-9-cat-2.jpg";
import Product3 from "../assets/images/id-9-cat-3.jpg";
import Product4 from "../assets/images/id-9-cat-4.jpg";
import Product5 from "../assets/images/id-9-cat-5.jpg";
// import Image1 from "../assets/images/15_3.jpg";
// import Image2 from "../assets/images/9_21.jpg";
// import Image3 from "../assets/images/10_22.jpg";
// import Image4 from "../assets/images/12_16.jpg";
// import Image5 from "../assets/images/11_18.jpg";
// import Image6 from "../assets/images/7_22.jpg";
// import Sofa from "../assets/images/1_11.jpg";
// import Chair1 from "../assets/images/3_20.jpg";
// import Chair2 from "../assets/images/6_19.jpg";
// import Clock from "../assets/images/8_20.jpg";
// import Banner4 from "../assets/images/id-9-banner-1.jpg";
// import Banner5 from "../assets/images/id-9-banner-2.jpg";
// import Banner6 from "../assets/images/id-9-banner-3.jpg";
// import Banner7 from "../assets/images/id-9-banner-4.jpg";
// import Item7 from "../assets/images/item-7.jpg";
// import Item8 from "../assets/images/item-8.jpg";
// import Item9 from "../assets/images/item-9.jpg";
// import Item10 from "../assets/images/item-10.jpg";

// eslint-disable-next-line no-unused-vars
const breakpoint = [
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 4
    }
  },
  {
    breakpoint: 1009,
    settings: {
      slidesToShow: 3
    }
  },
  {
    breakpoint: 720,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 460,
    settings: {
      slidesToShow: 1
    }
  }
];

const Main = () => {
  // FIX THIS FOR FUNCTIONAL COMPONENT
    
  useEffect(() => {

  }, [])

    // componentDidMount = () => {
      
    //   /**  First Slider */
    //   $(".slider-one")
    //     .not(".slick-intialized")
    //     .slick({
    //       autoplay: false,
    //       autoplaySpeed: 3000,
    //       dots: true,
    //       prevArrow: ".site-slider .slider-btn .prev",
    //       nextArrow: ".site-slider .slider-btn .next"
    //     });
      
    //   /**  Second  Slider */
    //   // $(".slider-two")
    //   //   .not(".slick-intialized")
    //   //   .slick({
    //   //     prevArrow: ".site-slider-two .prev",
    //   //     nextArrow: ".site-slider-two .next",
    //   //     slidesToShow: 5,
    //   //     slidesToScroll: 1,
    //   //     autoplaySpeed: 3000,
    //   //     responsive: breakpoint
    //   //   });
      
    //     /**  Third  Slider */
    //     // $(".slider-three")
    //     //   .not(".slick-intialized")
    //     //   .slick({
    //     //     prevArrow: ".site-slider-three .prev",
    //     //     nextArrow: ".site-slider-three .next",
    //     //     slidesToShow: 4,
    //     //     slidesToScroll: 1,
    //     //     autoplaySpeed: 3000,
    //     //     infinite: true,
    //     //     responsive: breakpoint
    //     //   });
      
    //       /**  Fourth  Slider */
    //       // $(".slider-four")
    //       //   .not(".slick-intialized")
    //       //   .slick({
    //       //     prevArrow: ".site-slider-four .prev",
    //       //     nextArrow: ".site-slider-four .next",
    //       //     slidesToShow: 4,
    //       //     slidesToScroll: 1,
    //       //     autoplaySpeed: 3000,
    //       //     infinite: true,
    //       //     responsive: breakpoint
    //       //   });
      
    //         /**  Fifth  Slider */
    //         // $(".slider-five")
    //         //   .not(".slick-intialized")
    //         //   .slick({
    //         //     prevArrow: ".slider-brand .prev",
    //         //     nextArrow: ".slider-brand .next",
    //         //     slidesToShow: 6,
    //         //     slidesToScroll: 1,
    //         //     autoplaySpeed: 3000,
    //         //     infinite: true,
    //         //     responsive: breakpoint
    //         //   });
      
    //           /**  Six  Slider */
    //           // $(".slider-six")
    //           //   .not(".slick-intialized")
    //           //   .slick({
    //           //     prevArrow: "",
    //           //     nextArrow: "",
    //           //     autoplaySpeed: 3000,
    //           //     infinite: true,
    //           //     autoplay: true,
    //           //     dots: true
    //           //   });
          
    // }
    //config.autoAddCss = false;
    //$( "p" ).addClass( "myClass yourClass" );
    // $("#td_id").attr('class', 'newClass');
    //$("#td_id").attr('class', 'newClass');

    return (
      <>
        <Header />
        {/* <!-- Main Section --> */}
        <main>
          {/* <!--- First Slider --> */}
          <div className="container-fluid p-0">
            <div className="site-slider">
              <div className="slider-one">
                <div>
                  <img src={Banner1} className="img-fluid" alt="Banner 1" />
                </div>
                <div>
                  <img src={Banner2} className="img-fluid" alt="Banner 2" />
                </div>
                <div>
                  <img src={Banner3} className="img-fluid" alt="Banner 3" />
                </div>
              </div>
              <div className="slider-btn">
                <span className="prev position-top">
                  <i className="fas fa-chevron-left"></i>
                  </span>
                <span className="next position-top right-0">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
          {/* <!--- /First Slider --> */}

          {/* <!-- Second Slider --> */}

          <div className="container-fluid">
            <div className="site-slider-two px-md-4">
              <div className="row slider-two text-center">

                <div className="col-md-2 product pt-md-5 pt-4">
                  <img src={Product1} alt="Product 1" />
                  <span className="border site-btn btn-span">SOFA & CHAIRS</span>
                </div>
                <div className="col-md-2 product pt-md-5 pt-4">
                  <img src={Product2} alt="Product 2" />
                  <span className="border site-btn btn-span">
                    FURNITURES & DECOR
                  </span>
                </div>
                <div className="col-md-2 product pt-md-5 pt-4">
                  <img src={Product3} alt="Product 3" />
                  <span className="border site-btn btn-span">LAMP & LIGHTING</span>
                </div>
                <div className="col-md-2 product pt-md-5 pt-4">
                  <img src={Product4} alt="Product 4" />
                  <span className="border site-btn btn-span">SOUND & LIFE</span>
                </div>
                <div className="col-md-2 product pt-md-5 pt-4">
                  <img src={Product5} alt="Product 5" />
                  <span className="border site-btn btn-span">APPLIANCES</span>
                </div>
                <div className="col-md-2 product pt-md-5 pt-4">
                  <img src={Product3} alt="Product 3" />
                  <span className="border site-btn btn-span">LAMP & LIGHTING</span>
                </div>
              
              </div>
              <div className="slider-btn">
                <span className="prev position-top">
                  <i class="fas fa-chevron-left fa-2x text-secondary"></i>
                </span>
                <span className="next position-top right-0">
                  <i class="fas fa-chevron-right fa-2x text-secondary"></i>
                </span>
              </div>
            </div>
          </div>
          {/* <!-- /Second Slider --> */}

          <hr className="hr" />

        </main>
        {/* <!-- /Main Section --> */}
        <Footer />
      </>
    );
}

export default Main;
