import React, { useEffect, useState } from 'react';
import productDetails from '../assets/Data/ProductDetails.json'
import Card from "@material-ui/core/Card";

import Typography from "@material-ui/core/Typography";
export default function Review(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(productDetails)
    }, [])
    return (
        <div>

            <Card
                style={{
                    backgroundColor: "pink",
                }}
            >
               <h5>details</h5>
                <Typography
                    color="textPrimary"
                >
                    ₹{products.length > 0 && products.find((product) => product.prodId === props.propId).price}
                </Typography>
                <Typography
                    color="textPrimary"
                >
                    {products.length > 0 && products.find((product) => product.prodId === props.propId).details}
                </Typography>
            </Card>
        </div>

    )
}