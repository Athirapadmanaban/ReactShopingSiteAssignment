import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import './ProductCard.css'
import skirt1 from '../assets/skirt1.png'
import { Link } from 'react-router-dom';




export default function ProductCard(props) {
 
var propValues = props.prod;

    return (
        <div stlye={{}} id="product">
         

          <Card
            style={{
              width: 400,
              backgroundColor: "gray",
            }}
          >
            <CardContent>
             <div>
                 <div><ProductImageCard propValues={propValues}/></div>
                 <Button size="small" variant="contained">Limited time Deal</Button>
             </div>
              
              <Typography
                style={{
                  marginBottom: 12,
                }}
                color="textPrimary"
              >
                
               ₹{propValues.price}
               
               </Typography>
               <Typography>
                 {propValues.prodame}
               </Typography>
             
              <div>
               <ViewDetails propValues={propValues}/>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Stay Safe.....</Button>
            </CardActions>
          </Card>
        </div>
      );
}
class ViewDetails extends React.Component {
  constructor(props) {
    super(props)
    
  }
  render() {
      
  return (
      <Link  to={{ pathname: '/productDetails', state: this.props.propValues }}>
      <Button size="small" variant="contained" color="primary">View More</Button>
      </Link>
  )
  }
}
function ProductImageCard(props) {
//  const path = require(props.propValues.image)
    return (
        <Card style={{
          height: '100px'
        }}>
            <img src={props.propValues.image}/>
          
        </Card> 
        
       
    )
}



