import React, { useEffect, useState } from "react";

import Sofa from "../assets/images/1_11.jpg";
import Chair1 from "../assets/images/3_20.jpg";
import Chair2 from "../assets/images/6_19.jpg";
import Clock from "../assets/images/8_20.jpg";
import Image1 from "../assets/images/15_3.jpg";
import Image5 from "../assets/images/11_18.jpg";
import Carousel from "./Carousel/Carousel";

const Products = ({ viewportWidth }) => {
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
          <Carousel
            show={itemsToShow}
            infiniteLoop
            renderPreviousButton={(previousItem, defaultClass) => (
              <button
                onClick={previousItem}
                className={`${defaultClass} btn btn-primary`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </button>
            )}
            renderNextButton={(nextItem, defaultClass) => (
              <button
                onClick={nextItem}
                className={`${defaultClass} btn btn-primary`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </button>
            )}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="col-auto col-xs-1 col-sm-2 col-md-3 col-lg-4 product py-md-4"
              >
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
      </div>
    </div>
  );
};

export default Products;
