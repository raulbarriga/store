import React from "react";
import $ from "jquery";
import "slick-carousel";
//import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faSyncAlt,
  faSearch,
  faRocket,
  faHandHoldingUsd,
  faHeadphonesAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
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
import Image1 from "../assets/images/15_3.jpg";
import Image2 from "../assets/images/9_21.jpg";
import Image3 from "../assets/images/10_22.jpg";
import Image4 from "../assets/images/12_16.jpg";
import Image5 from "../assets/images/11_18.jpg";
import Image6 from "../assets/images/7_22.jpg";
import Sofa from "../assets/images/1_11.jpg";
import Chair1 from "../assets/images/3_20.jpg";
import Chair2 from "../assets/images/6_19.jpg";
import Clock from "../assets/images/8_20.jpg";
import Banner4 from "../assets/images/id-9-banner-1.jpg";
import Banner5 from "../assets/images/id-9-banner-2.jpg";
import Banner6 from "../assets/images/id-9-banner-3.jpg";
import Banner7 from "../assets/images/id-9-banner-4.jpg";
import Item7 from "../assets/images/item-7.jpg";
import Item8 from "../assets/images/item-8.jpg";
import Item9 from "../assets/images/item-9.jpg";
import Item10 from "../assets/images/item-10.jpg";

const breakpoint = [
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 4,
    },
  },
  {
    breakpoint: 1009,
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 720,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 460,
    settings: {
      slidesToShow: 1,
    },
  },
];

const Main = () => {
  // FIX THIS FOR FUNCTIONAL COMPONENT
    componentDidMount = () => {
       /**  First Slider */
   $(".slider-one")
     .not(".slick-intialized")
     .slick({
       autoplay: true,
       autoplaySpeed: 3000,
       dots: true,
       prevArrow: ".site-slider .slider-btn .prev",
       nextArrow: ".site-slider .slider-btn .next"
     });
   
   /**  Second  Slider */
  //  $(".slider-two")
  //    .not(".slick-intialized")
  //    .slick({
  //      prevArrow: ".site-slider-two .prev",
  //      nextArrow: ".site-slider-two .next",
  //      slidesToShow: 5,
  //      slidesToScroll: 1,
  //      autoplaySpeed: 3000,
  //      responsive: breakpoint
  //    });
   
     /**  Third  Slider */
     $(".slider-three")
       .not(".slick-intialized")
       .slick({
         prevArrow: ".site-slider-three .prev",
         nextArrow: ".site-slider-three .next",
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplaySpeed: 3000,
         infinite: true,
         responsive: breakpoint
       });
   
       /**  Fourth  Slider */
       $(".slider-four")
         .not(".slick-intialized")
         .slick({
           prevArrow: ".site-slider-four .prev",
           nextArrow: ".site-slider-four .next",
           slidesToShow: 4,
           slidesToScroll: 1,
           autoplaySpeed: 3000,
           infinite: true,
           responsive: breakpoint
         });
   
         /**  Fifth  Slider */
         $(".slider-five")
           .not(".slick-intialized")
           .slick({
             prevArrow: ".slider-brand .prev",
             nextArrow: ".slider-brand .next",
             slidesToShow: 6,
             slidesToScroll: 1,
             autoplaySpeed: 3000,
             infinite: true,
             responsive: breakpoint
           });
   
           /**  Six  Slider */
           $(".slider-six")
             .not(".slick-intialized")
             .slick({
               prevArrow: "",
               nextArrow: "",
               autoplaySpeed: 3000,
               infinite: true,
               autoplay: true,
               dots: true
             });
    }
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
                  <FontAwesomeIcon className="fas" icon={faChevronLeft} />
                </span>
                <span className="next position-top right-0">
                  <FontAwesomeIcon className="fas" icon={faChevronRight} />
                </span>
              </div>
            </div>
          </div>
          {/* <div className="container-fluid p-0">
            
          </div> */}

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
                  <FontAwesomeIcon
                    className="fas fa-2x text-secondary"
                    icon={faChevronLeft}
                  />
                </span>
                <span className="next position-top right-0">
                  <FontAwesomeIcon
                    className="fas fa-2x text-secondary"
                    icon={faChevronRight}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* <!-- /Second Slider --> */}

          <hr className="hr" />

          {/* <!-- Features Section --> */}

          <div className="container text-center">
            <div className="features">
              <h1>Features Products</h1>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* <!-- Features third Slider --> */}
          <div className="container-fluid">
            <div className="site-slider-three px-md-4">
              <div className="slider-three row text-center px-4">
                <div className="col-md-2 product pt-md-5">
                  <img src={Image1} className="img-fluid" alt="Image 1" />
                  <div className="cart-details">
                    <h6 className="pro-title p-0">Vinyl Top Folding Table</h6>
                    <div className="rating">
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStarHalfAlt} />
                    </div>
                    <div className="pro-price py-2">
                      <h5>
                        <small>
                          <s className="text-secondary">$125.99</s>
                        </small>
                        <span>$120</span>
                      </h5>
                    </div>
                    <div className="cart mt-4">
                      <button
                        className="border site-btn btn-span"
                        type="button"
                        name="button"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 product pt-md-5">
                  <img src={Image2} className="img-fluid" alt="Image 2" />
                  <div className="cart-details">
                    <h6 className="pro-title p-0">Ikea RUSCH 25x4 Wall</h6>
                    <div className="rating">
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                    </div>
                    <div className="pro-price py-2">
                      <h5>
                        <small>
                          <s className="text-secondary">$119.99</s>
                        </small>
                        <span>$103</span>
                      </h5>
                    </div>
                    <div className="cart mt-4">
                      <button
                        className="border site-btn btn-span"
                        type="button"
                        name="button"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 product pt-md-5">
                  <img src={Image3} className="img-fluid" alt="Image 3" />
                  <div className="cart-details">
                    <h6 className="pro-title p-0">Himalayan Salt Lamp</h6>
                    <div className="rating">
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                    </div>
                    <div className="pro-price py-2">
                      <h5>
                        <small>
                          <s className="text-secondary">$469.99</s>
                        </small>
                        <span>$449.99</span>
                      </h5>
                    </div>
                    <div className="cart mt-4">
                      <button
                        className="border site-btn btn-span"
                        type="button"
                        name="button"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 product pt-md-5">
                  <img src={Image4} className="img-fluid" alt="Image 4" />
                  <div className="cart-details">
                    <h6 className="pro-title p-0">Table Lamp Bedside Desk</h6>
                    <div className="rating">
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStarHalfAlt} />
                    </div>
                    <div className="pro-price py-2">
                      <h5>
                        <span>$449.99</span>
                      </h5>
                    </div>
                    <div className="cart mt-4">
                      <button
                        className="border site-btn btn-span"
                        type="button"
                        name="button"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 product pt-md-5">
                  <img src={Image5} className="img-fluid" alt="Image 5" />
                  <div className="cart-details">
                    <h6 className="pro-title p-0">Persons Modern Ends</h6>
                    <div className="rating">
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStar} />
                      <FontAwesomeIcon className="fas" icon={faStarHalfAlt} />
                    </div>
                    <div className="pro-price py-2">
                      <h5>
                        <small>
                          <s className="text-secondary">$259.99</s>
                        </small>
                        <span>$240.00</span>
                      </h5>
                    </div>
                    <div className="cart mt-4">
                      <button
                        className="border site-btn btn-span"
                        type="button"
                        name="button"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 product pt-md-5">
                  <img src={Image6} className="img-fluid" alt="Image 6" />
                  <div className="cart-details">
                    <h6 className="pro-title p-0">Outdoor Patio Teak Side Table</h6>
                    <div className="rating">
                      <span>Write Your Review</span>
                    </div>
                    <div className="pro-price py-2">
                      <h5>
                        <small>
                          <s className="text-secondary">$139.99</s>
                        </small>
                        <span>$125</span>
                      </h5>
                    </div>
                    <div className="cart mt-4">
                      <button
                        className="border site-btn btn-span"
                        type="button"
                        name="button"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-btn">
                <span className="prev position-top">
                  <FontAwesomeIcon
                    className="fas fa-2x text-secondary"
                    icon={faChevronLeft}
                  />
                </span>
                <span className="next position-top right-0">
                  <FontAwesomeIcon
                    className="fas fa-2x text-secondary"
                    icon={faChevronRight}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* <!-- /Features third Slider --> */}
          {/* <!-- /Features Section --> */}

          {/* <!-- Discount Section --> */}
          <div className="container-fluid sofa bg-light">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="row box">
                  <div className="col-md-2 p-0 pl-md-3 bg-white offset-1 d-flex flex-md-column flex-sm-row">
                    <div className="py-md-2 py-2 mt-3 bg-white border text-center">
                      <h5 className="primary-color">
                        <strong>125</strong>
                      </h5>
                      <em>Days</em>
                    </div>
                    <div className="py-md-2 py-2 mt-3 bg-white border text-center">
                      <h5 className="primary-color">
                        <strong>5</strong>
                      </h5>
                      <em>Hours</em>
                    </div>
                    <div className="py-md-2 py-2 mt-3 bg-white border text-center">
                      <h5 className="primary-color">
                        <strong>45</strong>
                      </h5>
                      <em>Mins</em>
                    </div>
                    <div className="py-md-2 py-2 mt-3 bg-white border text-center">
                      <h5 className="primary-color">
                        <strong>13</strong>
                      </h5>
                      <em>Secs</em>
                    </div>
                  </div>
                  <div className="col-md-8 p-0 bg-white">
                    <div className="text-left">
                      <img src={Sofa} alt="Sofa" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 pt-5">
                <h4 className="text-left">Upholstered Fabric Sofa</h4>
                <p className="text-secondary">
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Congue nisi vitae suscipit tellus mauris a. Semper
                    viverra nam libero justo laoreet sit.
                  </small>
                </p>
                <div className="rating lightblue">
                  <FontAwesomeIcon className="fas" icon={faStar} />
                  <FontAwesomeIcon className="fas" icon={faStar} />
                  <FontAwesomeIcon className="fas" icon={faStar} />
                  <FontAwesomeIcon className="fas" icon={faStar} />
                  <FontAwesomeIcon className="fas" icon={faStar} />
                </div>
                <h4 className="pt-2">
                  <small>
                    <s className="text-secondary">$519.99</s>
                  </small>
                  <span className="text-color">$499.00</span>
                </h4>
                <div className="cart mt-4 row">
                  <div className="col-md-4 col-sm-12 p-0">
                    <button className="border site-btn btn-span bg-primary-color text-white">
                      Add to Cart
                    </button>
                  </div>
                  <div className="col-md-5 col-sm-12 p-0 mt-3">
                    <span className="p-3 bg-white border rounded-circle">
                      <FontAwesomeIcon className="far" icon={faHeart} />
                    </span>
                    <span className="p-3 bg-white border rounded-circle">
                      <FontAwesomeIcon className="fas" icon={faSyncAlt} />
                    </span>
                    <span className="p-3 bg-white border rounded-circle">
                      <FontAwesomeIcon className="fas" icon={faSearch} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /Discount Section --> */}

          {/* <!-- Product Section --> */}
          <div className="container-fluid">
            <div className="site-slider-four px-md-4">
              <div className="slider-four row text-center">
                <div className="col-md-2 product pt-md-5">
                  <img src={Sofa} className="border img-fluid" alt="Sofa" />
                </div>
                <div className="col-md-2 product pt-md-5">
                  <img src={Chair1} className="border img-fluid" alt="Chair 1" />
                </div>
                <div className="col-md-2 product pt-md-5">
                  <img src={Chair2} className="border img-fluid" alt="Chair 2" />
                </div>
                <div className="col-md-2 product pt-md-5">
                  <img src={Clock} className="border img-fluid" alt="Clock" />
                </div>
                <div className="col-md-2 product pt-md-5">
                  <img src={Image5} className="border img-fluid" alt="Image 5" />
                </div>
                <div className="col-md-2 product pt-md-5">
                  <img src={Image1} className="border img-fluid" alt="Image 1" />
                </div>
              </div>
              <div className="slider-btn">
                <span className="prev position-top">
                  <FontAwesomeIcon
                    className="fas fa-2x text-secondary"
                    icon={faChevronLeft}
                  />
                </span>
                <span className="next position-top right-0">
                  <FontAwesomeIcon
                    className="fas fa-2x text-secondary"
                    icon={faChevronRight}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* <!-- /Product Section --> */}

          <div className="container my-5">
            <div className="row">
              <div className="col-md-8 col-12">
                <img src={Banner4} className="img-fluid" alt="Banner 4" />
              </div>
              <div className="col-md-4 col-12">
                <img src={Banner5} className="img-fluid" alt="Banner 5" />
              </div>
            </div>
            <div className="row my-md-3">
              <div className="col-md-4 col-12">
                <img src={Banner6} className="img-fluid" alt="Banner 6" />
              </div>
              <div className="col-md-8 col-12">
                <img src={Banner7} className="img-fluid" alt="Banner 7" />
              </div>
            </div>
          </div>

          {/* <!-- New, Best and Features sellers --> */}
          <div className="container">
            <div className="newseller">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <h3 className="text-secondary">New Arrivals</h3>
                  <div className="row py-3">
                    <div className="col-md-3 p-0">
                      <div className="items border">
                        <img src={Image1} alt="Image 1" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-9 p-0 py-4 py-md-0">
                      <div className="px-4">
                        <h6>Vinyl Top Folding Table</h6>
                        <div className="rating pb-2">
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon
                            className="fas"
                            icon={faStarHalfAlt}
                          />
                        </div>
                        <h5>
                          <small>
                            <s className="text-secondary">$125.99</s>
                          </small>
                          <span className="text-color">$120</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="row py-3">
                    <div className="col-md-3 p-0">
                      <div className="items border">
                        <img src={Image5} alt="Image 5" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-9 p-0 py-4 py-md-0">
                      <div className="px-4">
                        <h6>Parsons Modern End Black</h6>
                        <div className="rating pb-2">
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                        </div>
                        <h5>
                          <small>
                            <s className="text-secondary">$159.99</s>
                          </small>
                          <span className="text-color">$240</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="row py-3">
                    <div className="col-md-3 p-0">
                      <div className="items border">
                        <img src={Image2} alt="Image 2" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-9 p-0 py-4 py-md-0">
                      <div className="px-4">
                        <h6>Ikea RUSCH 25x4 Wall</h6>
                        <div className="rating pb-2">
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                        </div>
                        <h5>
                          <span className="text-color">$103</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className="text-secondary">Bestseller</h3>
                  <div className="row py-3">
                    <div className="col-md-3 p-0">
                      <div className="items border">
                        <img src={Image5} alt="Image 5" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-9 p-0 py-4 py-md-0">
                      <div className="px-4">
                        <h6>Parsons Modern End Black</h6>
                        <div className="rating pb-2">
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                        </div>
                        <h5>
                          <small>
                            <s className="text-secondary">$159.99</s>
                          </small>
                          <span className="text-color">$240</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="row py-3">
                    <div className="col-md-3 p-0">
                      <div className="items border">
                        <img src={Image4} alt="Image 4" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-9 p-0 py-4 py-md-0">
                      <div className="px-4">
                        <h6>Table Lamp Bedside Desk</h6>
                        <div className="rating pb-2">
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                        </div>
                        <h5>
                          <small>
                            <s className="text-secondary">$449.99</s>
                          </small>
                          <span className="text-color">$469.99</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="row py-3">
                    <div className="col-md-3 p-0">
                      <div className="items border">
                        <img src={Image2} alt="Image 2" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-9 p-0 py-4 py-md-0">
                      <div className="px-4">
                        <h6>Ikea RUSCH 25x4 Wall</h6>
                        <div className="rating pb-2">
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                        </div>
                        <h5>
                          <span className="text-color">$103</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className="text-secondary">Featured</h3>
                  <div className="row py-3">
                    <div className="col-md-3 p-0">
                      <div className="items border">
                        <img src={Clock} alt="Clock" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-9 p-0 py-4 py-md-0">
                      <div className="px-4">
                        <h6>Large Wall Clock Sticker</h6>
                        <div className="rating pb-2">
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon
                            className="fas"
                            icon={faStarHalfAlt}
                          />
                        </div>
                        <h5>
                          <small>
                            <s className="text-secondary">$219.99</s>
                          </small>
                          <span className="text-color">$210.99</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="row py-3">
                    <div className="col-md-3 p-0">
                      <div className="items border">
                        <img src={Sofa} alt="Sofa" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-9 p-0 py-4 py-md-0">
                      <div className="px-4">
                        <h6>Upholstered Fabric Sofa</h6>
                        <div className="rating pb-2">
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon
                            className="fas"
                            icon={faStarHalfAlt}
                          />
                        </div>
                        <h5>
                          <small>
                            <s className="text-secondary">$519.99</s>
                          </small>
                          <span className="text-color">$499.00</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="row py-3">
                    <div className="col-md-3 p-0">
                      <div className="items border">
                        <img src={Image1} alt="Image 1" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-9 p-0 py-4 py-md-0">
                      <div className="px-4">
                        <h6>Vinyl Top Folding Table</h6>
                        <div className="rating pb-2">
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                          <FontAwesomeIcon className="fas" icon={faStar} />
                        </div>
                        <h5>
                          <small>
                            <s className="text-secondary">$125.99</s>
                          </small>
                          <span className="text-color">$120</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /New, Best and Features sellers --> */}

          {/* <!-- Brand --> */}
          <div className="container-fluid">
            <div className="slider-brand">
              <div className="slider-five px-5">
                <div>
                  <img src={Item7} alt="Item 7" className="img-fluid" />
                </div>
                <div>
                  <img src={Item8} alt="Item 8" className="img-fluid" />
                </div>
                <div>
                  <img src={Item9} alt="Item 9" className="img-fluid" />
                </div>
                <div>
                  <img src={Item10} alt="Item 10" className="img-fluid" />
                </div>
                <div>
                  <img src={Item8} alt="Item 8" className="img-fluid" />
                </div>
                <div>
                  <img src={Item7} alt="Item 7" className="img-fluid" />
                </div>
                <div>
                  <img src={Item9} alt="Item 9" className="img-fluid" />
                </div>
              </div>
              <div className="slider-btn">
                <span className="prev position-top">
                  <FontAwesomeIcon className="fas" icon={faChevronLeft} />
                </span>
                <span className="next position-top right-0">
                  <FontAwesomeIcon className="fas" icon={faChevronRight} />
                </span>
              </div>
            </div>
          </div>
          {/* <!-- /Brand --> */}

          {/* <!-- Our Client --> */}
          <div className="container-fluid p-0">
            <div className="slider-client">
              <div className="slider-box text-center">
                <h1 className="pt-5 font-roboto">What Our Clients Say?</h1>
                <div className="slider-six">
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In finibus gravida est nec tincidunt. Donec porttitor
                      libero at nisl posuere, eu hendrerit sem fermentum. Nam
                      quis vestibulum ex. Nunc eget auctor enim.
                    </p>
                    <h5 className="m-0">Akshay Kashyyap</h5>
                    <small className="pb-1">CEO Daily Tuition</small>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In finibus gravida est nec tincidunt. Donec porttitor
                      libero at nisl posuere, eu hendrerit sem fermentum. Nam
                      quis vestibulum ex. Nunc eget auctor enim.
                    </p>
                    <h5 className="m-0">Akshay Kashyyap</h5>
                    <small className="pb-1">CEO Daily Tuition</small>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In finibus gravida est nec tincidunt. Donec porttitor
                      libero at nisl posuere, eu hendrerit sem fermentum. Nam
                      quis vestibulum ex. Nunc eget auctor enim.
                    </p>
                    <h5 className="m-0">Akshay Kashyyap</h5>
                    <small className="pb-1">CEO Daily Tuition</small>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In finibus gravida est nec tincidunt. Donec porttitor
                      libero at nisl posuere, eu hendrerit sem fermentum. Nam
                      quis vestibulum ex. Nunc eget auctor enim.
                    </p>
                    <h5 className="m-0">Akshay Kashyyap</h5>
                    <small className="pb-1">CEO Daily Tuition</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /Our Client --> */}

          {/* <!-- Facilities --> */}
          <div className="container-fluid">
            <div className="site-info">
              <div className="row text-center py-3 bg-primary-color m-0">
                <div className="col-md-4 col-sm-12 my-md-0 my-4">
                  <div className="row justify-content-center text-light">
                    <FontAwesomeIcon
                      className="fas fa-4x px-4"
                      icon={faRocket}
                    />
                    <div className="py-2 font-roboto text-left">
                      <h6 className="m-0">Free Shipping & Return</h6>
                      <small>Free Shipping on order over $49</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 my-md-0 my-4">
                  <div className="row justify-content-center text-light">
                    <FontAwesomeIcon
                      className="fas fa-4x px-4"
                      icon={faHandHoldingUsd}
                    />
                    <div className="py-2 font-roboto text-left">
                      <h6 className="m-0">Money Guarantee</h6>
                      <small>30 days money back guarantee</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 my-md-0 my-4">
                  <div className="row justify-content-center text-light">
                    <FontAwesomeIcon
                      className="fas fa-4x px-4"
                      icon={faHeadphonesAlt}
                    />
                    <div className="py-2 font-roboto text-left">
                      <h6 className="m-0">Online Support</h6>
                      <small>We support online 24 hours a day</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /Facilities --> */}
        </main>
        {/* <!-- /Main Section --> */}
        <Footer />
      </>
    );
}

export default Main;
