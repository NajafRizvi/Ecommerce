import React from 'react';
import Home from '../Home';
import Addtocard from '../Addtocard';
import Checkout from '../Checkout';
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
                    <Route exact path="/Preview/:id" component={Preview}></Route>
                    <Route exact path="/Addtocard/:id?" component={Addtocard}></Route>
                    <Route path="/Checkout" component={Checkout}></Route>
                </Switch>
            </Router>
        </div>
    )
}
