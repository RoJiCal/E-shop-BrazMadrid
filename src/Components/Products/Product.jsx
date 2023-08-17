import React, { useState } from "react";

import Store from "../../store/Context";
import LikeButton from "./LikeButton";
import CarouselImg from "./CarouselImg";

export default function Product({ item }) {
  const { addCart } = Store();

  // console.log("Item used in Product component", item)
  return (
    <div className="product">
      
      <div className="product_img">
        <CarouselImg productItem={item}/>
      </div>
      
      <div className="product_footer">
        <h1>{item.title}</h1>
        <p>{item.category}</p>
        <p className="price">{item.price} €</p>
      </div>
      <div className="buttom">
        <button className="btn" onClick={() => addCart(item.id)}>
          Add to cart
        </button>

        <LikeButton />
      </div>
    </div>
  );
}
