import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  var propValues = props.prod;

  return (
    <div stlye={{}} id="product" className="mb-2 col-2 mr-0 pr-0">
      <Card
        style={{
          maxWidth: "170px",
          padding: 0,
          paddingLeft: 0,
          boxShadow: "none",
        }}
        className="itemCard"
      >
        <CardContent>
          <div>
            <div>
              <ProductImageCard propValues={propValues} />
            </div>
          </div>

          <Typography className="productName" style={{}} color="textPrimary">
            ₹{propValues.price}
          </Typography>
          <Typography className="productName">{propValues.prodame}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

function ProductImageCard(props) {
  return (
    <Card
      style={{
        height: "150px",
        width: "100%",
        boxShadow: "none",
      }}
    >
      {" "}
      <Link to={{ pathname: "/productDetails", state: props.propValues }}>
        <img
          style={{
            height: "100%",
            width: "100%",
          }}
          src={props.propValues.image}
        />
      </Link>
    </Card>
  );
}
