import React from 'react';
import Home from '../Home';
import Addtocard from '../Addtocard';
import Success from '../Success'
import BillingDetails from '../BillingDetails';
import EmptyCart from '../EmptyCart';
import AddToCheckout from '../AddToCheckout';
import Design from '../Design';
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
                    <Route path="/Design" component={Design}></Route>
                    <Route path="/BillingDetails" component={BillingDetails}></Route>
                    <Route path="/Success" component={Success}></Route>
                </Switch>
            </Router>
        </div>
    )
}
