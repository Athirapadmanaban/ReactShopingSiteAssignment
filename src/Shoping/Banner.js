import React from 'react'
import './Banner.css'
import { Card } from "@material-ui/core"
function Banner() {
    return (
        <div>
           
           <Card className="banner-card">
           <div className="row">
            <div className="col-6 banner-image">
                <img  src="homepage.jfif"/>
                </div>
                <div className="col-6 banner-content">
                    <div className="container banner-text">
                        FLAT ₹300 off!
                        </div>
                        <div className="banner-text">
                        + Free shipping
                        </div>
                        <div className="small-content">On your first order</div>
                 
                </div>
                </div>
           </Card>
          
       
        </div>
    )
}

export default Banner
