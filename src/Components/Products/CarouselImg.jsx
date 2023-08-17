

import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselImg(props) {
  const { productItem } = props;

  // console.log("Product item received in Carousel", productItem);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="product_img">
      <div
        className="product_img"
        style={{ display: "block", width: 310, height: 350, padding: 30 }}
      >
        <Carousel pause="hover" activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={productItem?.image}
              alt="imageFront"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={productItem?.image2}
              alt="ImageBack"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
