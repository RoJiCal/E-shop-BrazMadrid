import React from "react";
import Store from "../../store/Context.jsx";
import Product from "./Product";

export default function ListProducts() {
  // console.log("Store()", Store())
  const { data } = Store()

  return (
    <>
      <h1 className="title">Products</h1>
      <div className="products">
      {data.items.map(item => <Product key={item.id} item={item} />)}
      </div>
    </>
  );
}
