import React, { useEffect, useState } from "react";

import Sofa from "../assets/images/1_11.jpg";
import Chair1 from "../assets/images/3_20.jpg";
import Chair2 from "../assets/images/6_19.jpg";
import Clock from "../assets/images/8_20.jpg";
import Image1 from "../assets/images/15_3.jpg";
import Image5 from "../assets/images/11_18.jpg";
import Carousel from "./Carousel/Carousel";

const Products = ({viewportWidth}) => {
  const [itemsToShow, setItemsToShow] = useState(1);

  const items = [
    {
      img: Sofa,
      alt: "Product 1",
    },
    {
      img: Chair1,
      alt: "Product 2",
    },
    {
      img: Chair2,
      alt: "Product 3",
    },
    {
      img: Clock,
      alt: "Product 4",
    },
    {
      img: Image5,
      alt: "Product 5",
    },
    {
      img: Image1,
      alt: "Product 6",
    },
  ];

    useEffect(() => {
      if (`${viewportWidth}` >= 992) {
        setItemsToShow(4);
      } else if (`${viewportWidth}` >= 768) {
        setItemsToShow(3);
      } else if (`${viewportWidth}` >= 576) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    }, [viewportWidth]);
    
  return (
    <div id="product-slider-4" className="container-fluid px-0">
      <div className="site-slider-four px-md-4">
        <div className="slider-four row text-center">
          {/* <div className="col-md-2 product pt-md-5">
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
            <img src={Image5} className="border img-fluid" alt="Product 5" />
          </div>
          <div className="col-md-2 product pt-md-5">
            <img src={Image1} className="border img-fluid" alt="Product 1" />
          </div> */}
          <Carousel show={itemsToShow} infiniteLoop={true}>
            {items.map((item, index) => (
              <div key={index} className="col-auto col-xs-1 col-sm-2 col-md-3 col-lg-4 product pt-md-5">
                <img
                // col-md-2
                  src={item.img}
                  className="border img-fluid all-product-img"
                  alt={item.alt}
                />
              </div>
            ))}
          </Carousel>
        </div>
        {/* <div className="slider-btn">
          <span className="prev position-top">
            <i className="fas fa-chevron-left fa-2x text-secondary"></i>
          </span>
          <span className="next position-top right-0">
            <i className="fas fa-chevron-right fa-2x text-secondary"></i>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Products;
