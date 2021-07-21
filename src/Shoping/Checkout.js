import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import store from './ShopStore';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
class Checkout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            productsArray: []
        }

    }

    render() {

        return (
            <div>
                <h3>
                    See your orders
                </h3>

                {store.getState().products.map((prod) => <ViewCheckoutPage key={prod.prodId} prod={prod} />)}
                <div className="pl-3 pt-3">
                    <Link to={{ pathname: '/' }}>

                        <Button size="small" variant="contained" color="primary">Checkout</Button>
                        <div>

                        </div>

                    </Link>
                </div>
                <Link to={{ pathname: '/' }}>

                    Back to home page

                </Link>
            </div>
        )
    }
}
function ViewCheckoutPage(props) {
    return (
        <Card
            style={{
                width: 400,
                backgroundColor: "gray",
            }}
        >
            <CardContent>
                <div className="row">
                    <div className="col"><ViewImageCard propValues={props.prod} /></div>
                    <div className="col"><ViewOrderDetailCard propValues={props.prod} /></div>

                </div>
            </CardContent>
        </Card>
    )
}
function ViewImageCard(props) {

    return (
        <Card style={{ height: '200px' }}>
            <img src={props.propValues.image} />

        </Card>


    )
}
class ViewOrderDetailCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productsQty: props.propValues.qty
        }
    }

    incrementQty = () => {

        var action = {
            type: 'UPDATE_QTY',
            data: {

                qty: this.props.propValues.qty + 1,
                Id: this.props.propValues.prodId,
                totalPrice: (this.props.propValues.qty + 1) * (this.props.propValues.price)
            }
        };
        store.dispatch(action)
    }

    render() {

        return (
            <Card>

                <div>{this.props.propValues.prodame}</div>
                <div>Price:₹{this.props.propValues.price}</div>
                <div>Quantity:

                    {this.props.propValues.qty}
                </div>
                <div>
                    Total Price: ₹{this.props.propValues.totalPrice}
                </div>
            </Card>


        )
    }
}
export default Checkout