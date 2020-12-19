import React from 'react';
import Home from '../Home';
import Addtocard from '../Addtocard';
import BillingDetails from '../BillingDetails';
import EmptyCart from '../EmptyCart';
import AddToCheckout from '../AddToCheckout';
import Error from '../Error';
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";
import Preview from '../Preview';
export default function Routers() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={Home}></Route>
                    <Route  path="/Preview/:id" component={Preview}></Route>
                    <Route  path="/Addtocard/:id?" component={Addtocard}></Route>
                    <Route exact path="/AddToCheckout" component={AddToCheckout}></Route>
                    <Route path="/EmptyCart" component={EmptyCart}></Route>
                    <BillingDetails path="/BillingDetails" component={BillingDetails}></BillingDetails>
                    <Route path="*">
                    <Error />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
