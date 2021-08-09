import "./ProductDetails.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import store from "./ShopStore";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Details from "./Details";
import CustomerReview from "./CustomerReview";
import StarRating from "react-star-ratings";
toast.configure();
export default function ProductDetails(props) {
  var productData = props.location.state;
  // console.log('fdfd'+store.getState().loggedin)

  return (
    <div>
      <header className="App-header">
        <h3>
          VOGUER ..{" "}
          <span>
            <i>Your perfect shopping partner</i>
          </span>
        </h3>
      </header>
      <div className="App-body">
        <ProductDetailsCard productData={productData} />
      </div>
    </div>
  );
}
function ProductDetailsCard(props) {
  const [addToCartFlag, setAddToCartFlag] = useState(true);

  let addtoCart = () => {
    var action = {
      type: "ADD_TO_CART",
      data: {
        prodId: props.productData.prodId,
        prodame: props.productData.prodame,
        price: props.productData.price,
        image: props.productData.image,
        qty: 1,
        totalPrice: props.productData.price,
      },
    };
    store.dispatch(action);
    setAddToCartFlag(false);
  };

  return (
    <div>
      <div></div>
      <Card
        style={{
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <CardContent>
          <div>
            <h3>{props.productData.prodame}</h3>
            <div className="row">
              <div className="col">
                <ViewImageCard propValues={props} />
                <Details propId={props.productData.prodId} />
                <div>
                  <StarRating
                    rating={4}
                    starRatedColor="yellow"
                    changeRating={4}
                    numberOfStars={6}
                    name="rating"
                  />
                </div>
                <div>
                  {addToCartFlag && (
                    <Link to={{ pathname: "/checkout" }}>
                      <Button
                        onClick={addtoCart}
                        size="small"
                        variant="contained"
                        color="primary"
                      >
                        Add to cart
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
              <div className="col">
                <CustomerReview propId={props.productData.prodId} />
              </div>
            </div>
            <div></div>

            <div>
              {addToCartFlag && (
                <Link to={{ pathname: "/", state: true }}>
                  <i>Back to home</i>
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ViewImageCard(props) {
  return (
    <Card
      style={{
        height: 200,
      }}
    >
      <img src={props.propValues.productData.image} />
    </Card>
  );
}
