import Store from "../../store/Context";
import React from "react";
import duende from "../../images/Duende-Design-Logo.png"
// import Link und Outlet nur hier
import { Link, Outlet, useNavigate } from "react-router-dom";



export default function Header() {

    //hook useNavigate
    const navigate = useNavigate();

    const {toggleOpen, cart} = Store()
    return( 
        <>
            
            <header id="header" style={{ zIndex: 5000}}>
                
                        <div className="logo">
                            <img src={duende} alt="" onClick={() => { navigate('/')}} style={{width: 100, height: 100, margin: '10px 0 10px 0', cursor: 'pointer'
                            }} />
                        </div>
                   
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/products">PRODUCTS</Link>
                        </li>
                    </ul>
                    <Link to="/cart">
                        <div className="icon_cart">
                            <box-icon name="cart" onClick={toggleOpen}></box-icon>
                            <span className="total-Items">{cart.length}</span>
                        </div>
                    </Link >
            
             </header>
             
             <Outlet/>
        </>
        
    )
}