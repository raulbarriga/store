import React, { useEffect, useState } from "react";

import Carousel from "./Carousel/Carousel";
import Image1 from "../assets/images/15_3.jpg";
import Image2 from "../assets/images/9_21.jpg";
import Image3 from "../assets/images/10_22.jpg";
import Image4 from "../assets/images/12_16.jpg";
import Image5 from "../assets/images/11_18.jpg";
import Image6 from "../assets/images/7_22.jpg";

const Features = ({ viewportWidth }) => {
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    if (`${viewportWidth}` >= 1200) { // xl bootstrap breakpoint
      setItemsToShow(4);
    } else if (`${viewportWidth}` >= 992) { // lg bootstrap breakpoint
      setItemsToShow(3);
    } else if (`${viewportWidth}` >= 768) { // md bootstrap breakpoint
      setItemsToShow(2);
    } else if (`${viewportWidth}` >= 576) { // sm bootstrap breakpoint
      setItemsToShow(1);
    }
  }, [viewportWidth]);

  const items = [
    {
      img: Image1,
      alt: "Product 1",
      h6: "Vinyl Top Folding Table",
      review: (
      <>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star-half-alt"></i>
      </>
      ),
      originalPrice: "$125.99",
      discountPrice: "$120",
    },
    {
      img: Image2,
      alt: "Product 2",
      h6: "Ikea RUSCH 25x4 Wall",
      review: (
        <>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      </>
      ),
      originalPrice: "$119.99",
      discountPrice: "$103",
    },
    {
      img: Image3,
      alt: "Product 3",
      h6: "Himalayan Salt Lamp",
      review: (
        <>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      </>
      ),
      originalPrice: "$469.99",
      discountPrice: "$449.99",
    },
    {
      img: Image4,
      alt: "Product 4",
      h6: "Table Lamp Bedside Desk",
      review: (
        <>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star-half-alt"></i>
      </>
      ),
      originalPrice: "$449.99",
      discountPrice: null,
    },
    {
      img: Image5,
      alt: "Product 5",
      h6: "Persons Modern Ends",
      review: (
        <>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </>
      ),
      originalPrice: "$259.99",
      discountPrice: "$240.00",
    },
    {
      img: Image6,
      alt: "Product 6",
      h6: "Outdoor Patio Teak Side Table",
      review: (<span>Write Your Review</span>),
      originalPrice: "$139.99",
      discountPrice: "$125",
    },
  ];
  
  return (
    <>
      <div id="features" className="container text-center">
        <div className="features">
          <h1>Features Products</h1>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* <!-- Features third Slider --> */}
      <div className="container-fluid g-0">
        <div className="site-slider-three">
          <div className="row row-cols-auto slider-three text-center g-0">
            <Carousel show={itemsToShow} infiniteLoop={true}>
              {items.map((item, index) => (
                <div key={index} className="col-md-2 col-lg-3 col-xl-4 product pt-md-5">
                  <img src={item.img} className="img-fluid all-product-img" alt={item.alt} />
                  <div className="cart-details">
                    <h6 className="pro-title p-0">{item.h6}</h6>
                    <div className="rating">
                      {item.review}
                    </div>
                    <div className="pro-price py-2">
                      <h5>
                        <small>
                          <s className="text-secondary">{item.originalPrice}</s>
                        </small>
                        {" "}
                        <span>{item.discountPrice}</span>
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
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* <!-- /Features third Slider --> */}
    </>
  );
};

export default Features;
