import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ListProducts from "./Components/Products/ListProducts";
import ListCart from "./Components/Cart/ListCart";


// import boxicons an ParentsComponent App
import "boxicons";
import { Routes, Route } from "react-router-dom"



function App() {
  return (
    <div className="App">

      {/* Routing mit react-router-dom */}

      <Routes>
       
        <Route path="/" element={<Header/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<ListProducts/>}/>
          <Route path="/cart" element={<ListCart/>}/>
        </Route>

     
      </Routes>
    
    </div>
  );
}

export default App;
