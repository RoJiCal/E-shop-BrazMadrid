import React, { useEffect } from "react";
import { useState } from "react";

import Cart from "./Cart";
import Store from "../../store/Context";

export default function ListCart() {

    const { show1, show2, toggleClose, cart } = Store()


    const [total, setTotal] = useState(0);


    
    useEffect(()=> {
      
      //Total price
      let cost = cart.reduce((cost, item) =>{ 
        return cost + item.price
      }, 0)
      setTotal(cost)
    }, [cart])





  return (
    <div className={show1}>
      <div className={show2}>
        <div className="cart_close">
          <box-icon name="x" onClick={toggleClose}></box-icon>
        </div>
        <h2>Your cart</h2>

        {/* map für die CartListe */}
        {cart.map(item => <Cart item={item} />)}
        <div className="cart_footer">
          <h3>Total:{total}€</h3>
          <button className="btn">Payment</button>
        </div>
      </div>
    </div>
  );
}
