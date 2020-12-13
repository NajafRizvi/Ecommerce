import React,{ useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart,removeFromCart } from '../store/action/addToCardAction'
import CheckoutForm from './CheckoutForm';
import product from '../img/product-2.jpg';
import EmptyCart from './EmptyCart';
import Footer from './Footer';
import {Navbar} from './Navbar';  
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
export default function Addtocard(props) {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const productID = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const stripePromise = loadStripe('pk_test_51HueyACuy52IK8zWyDBJwnm8mcSrQwWStva9HsHHdsJJk1GRnQLPE6P0m4EOcBqnVDr5smI3vXFbn51uxyDBO7YN00KOTo0TgV');
    useEffect(() => {
        if (productID) {
            dispatch(addToCart(productID, qty));
        }
    }, []);
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
      }
    // Used in Contine to Shopping Button
    const Redirect = () => {
        props.history.push('/')
    }
    //Used in Checkout Button\
    const Checkout = ()=>{
        props.history.push('/BillingDetails')
    }

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    
                    {cartItems.length === 0 ?
                    
                    <EmptyCart Redirect={Redirect}/>
                    :
                    <div className="col-sm-12 col-md-10 col-md-offset-1">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th className="text-center">Price</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map(item => (
                                        <tr>
                                            <td className="col-sm-8 col-md-6">
                                                <div className="media">
                                                    <a className="thumbnail pull-left" href="#"> <img className="media-object" src={item.image} style={{ width: '72px', height: '72px' }} /> </a>
                                                    <div className="media-body">
                                    <h4 className="media-heading"><a href="#">Product name:{item.name}</a></h4>
                                                        <h5 className="media-heading"> by: <a href="#">{item.name}</a></h5>
                                                        <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                                                    </div>
                                                </div></td>
                                            <td className="col-sm-1 col-md-1" style={{ textAlign: 'center' }}>
                                                <input type="number" className=" from-control" id="exampleInputEmail1"
                                                 value={item.qty} 
                                                 onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))} />
                                            </td>
                                            <td className="col-sm-1 col-md-1 text-center"><strong>${item.price}</strong></td>
                                            <td className="col-sm-1 col-md-1">
                                            <button type="button" className="btn btn-danger" onClick={()=>removeFromCartHandler(item.product)}>
                                                    <span className="glyphicon glyphicon-remove" /> Remove
                                            </button></td>
                                        </tr>
                                    ))}
                               
                                <tr>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td><h5>Subtotal</h5></td>
                                    <td className="text-right"><h5><strong>{cartItems.reduce((a, c) => a + c.qty, 0)} items
                                    :
                                    $ {cartItems.reduce((a, c) => a + c.price * c.qty,0)}</strong></h5></td>
                                </tr>
                                <tr>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td><h5>Estimated shipping</h5></td>
                                    <td className="text-right"><h5><strong>$10</strong></h5></td>
                                </tr>
                                <tr>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td><h3>Total</h3></td>
                                    <td className="text-right"><h3><strong>${cartItems.reduce((a, c) => a + c.price * c.qty, -10)}</strong></h3></td>
                                </tr>
                                <tr>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td> &nbsp; </td>
                                    <td>
                                        <button type="button" className="btn btn-default">
                                            <span className="glyphicon glyphicon-shopping-cart" /> Continue Shopping
                    </button></td>
                                    <td>
                                        <button type="button" className="btn btn-success" onClick={()=>Checkout()}>
                                            Checkout <span className="glyphicon glyphicon-play" />
                                        </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    }
                </div>
            </div>                             
            <Footer/>
        </div>
    )
}
