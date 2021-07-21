import './ProductDetails.css'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import store from './ShopStore';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import {Link } from 'react-router-dom';
import Review from './Review'
toast.configure()
export default function ProductDetails(props) {
    
    const history = useHistory();
    var productData = props.location.state
    
    return (
        <div className="App">
            <header className="App-header">
                <h3>
                    VOGUER .. <span><i>Your perfect shopping partner</i></span>
                </h3>
            </header>
            <div className="App-body">
                <ProductDetailsCard productData={productData} history={history} />
            </div>

        </div>
    )
}
function ProductDetailsCard(props){
   
    const [addToCartFlag, setAddToCartFlag] = useState(true);
  
    let addtoCart = () => {
        var action = {
            type: 'ADD_TO_CART',
            data: {
                prodId: props.productData.prodId,
                prodame: props.productData.prodame,
                price: props.productData.price,
                image: props.productData.image,
                qty: 1,
                totalPrice: props.productData.price
            }
        };
        store.dispatch(action)
        setAddToCartFlag(false)
        

    }

    
        return (
            <div>
                <div ></div>
                <Card style={{
                    width: 700,
                    backgroundColor: "white",
                }}>
                    <CardContent>
                        <div>
                            <h3>{props.productData.prodame}</h3>
                            <div className="row">
                                <div className="col">
                                <ViewImageCard propValues={props} />
                                </div>
                                <div className="col">
                                   <Review propId={props.productData.prodId}/>
                                </div>
                                </div>
                            <Button size="small" variant="contained">Limited time Deal</Button>

                            <div>

                                
                                   {addToCartFlag && 
                                   <Link  to={{ pathname: '/checkout'}}>
                                   <Button  onClick={addtoCart}size="small" variant="contained" color="primary">Add to cart</Button>
                                   </Link>
                                    }
                                     
                                    
                             
                            </div>
                            <div>
                            {addToCartFlag && 
                                   <Link  to={{ pathname: '/'}}>
                                   <i>Back to home</i>
                                   </Link>
                                    }
                            </div>
                        </div>

                    </CardContent>
                </Card>
            </div>
        )
    

}

function ViewImageCard(props) {
    
    return (
        <Card style={{
            height:200
        }}>
            <img src={props.propValues.productData.image} />

        </Card>


    )
}
