import React from "react";
import logo from "../../images/logo.PNG"



export default function Home() {

    return( 
        
        <div className="home"><br />
          

            <img src={logo} alt="" style={{ width: '100%', height: '600px', objectFit: 'cover', textAlign: 'center'}} />
            <p className="text" style={{paddingBottom: '30px'}}>Original designs of Duende Designs.
            Collection of unisex urban clothing of high quality t-shirts and hoodies.</p>   

        </div>    
        
    )
}