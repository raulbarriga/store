import React, { useState, useEffect } from "react";

import Item7 from "../assets/images/item-7.jpg";
import Item8 from "../assets/images/item-8.jpg";
import Item9 from "../assets/images/item-9.jpg";
import Item10 from "../assets/images/item-10.jpg";
import Item11 from "../assets/images/item-11.jpg";
import Carousel from "./Carousel/Carousel";

const BrandSlider = ({ viewportWidth }) => {
  const brands = [
    {
      img: Item7,
      alt: "Brand 1",
    },
    {
      img: Item7,
      alt: "Brand 1",
    },
    {
      img: Item8,
      alt: "Brand 2",
    },
    {
      img: Item8,
      alt: "Brand 2",
    },
    {
      img: Item9,
      alt: "Brand 3",
    },
    {
      img: Item10,
      alt: "Brand 4",
    },
    {
      img: Item11,
      alt: "Brand 5",
    }
  ];

  const [itemsToShow, setItemsToShow] = useState(6);

  useEffect(() => {
    if (`${viewportWidth}` >= 1300) {
      setItemsToShow(6);
    } else if (`${viewportWidth}` >= 1200) {
      setItemsToShow(5);
    } else if (`${viewportWidth}` >= 992) {
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
    <div id="brands" className="container-fluid">
      <div className="slider-brand">
        <div className="slider-five px-5">
          <Carousel className="carousel-dark" show={itemsToShow} infiniteLoop={true}>
            {/* <div>
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
            </div> */}
            {brands.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt={item.alt} className="img-fluid" />
              </div>
            ))}
          </Carousel>
        </div>
        {/* <div className="slider-btn">
          <span className="prev position-top">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span className="next position-top right-0">
            <i class="fas fa-chevron-right"></i> 
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default BrandSlider;
