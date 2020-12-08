import React from "react"
import {useSelector} from 'react-redux';
import './navbar.css'
export const Navbar = () => {
  const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a href="#" className="navbar-brand">Brand</a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <form className="form-inline">
            <div className="input-group">                    
              <input type="text" className="form-control" placeholder="Search" />
              <div className="input-group-append">
                <button type="button" className="btn btn-secondary"><i className="fa fa-search" /></button>
              </div>
            </div>
          </form>
          <div className=" d-flex justify-content-end navbar-nav">
            <a href="#" className="nav-item nav-link">Login<i className="fa fa-user" /></a>
            <a href="#" className="nav-item nav-link">Cart<i className="fa fa-shopping-cart" />
            {cartItems.length> 0 && (
              <span><i className="fa fa-user-check"></i>{cartItems.length}</span>
            )}
            </a>
          </div>
          
        </div>
      </nav>
        <nav className="navbar navbar-expand-md navbar-light bg-light sub-menu">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Schools</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Publishers</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Support
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Delivery Information</a>
                    <a className="dropdown-item" href="#">Privacy Policy</a>
                    <a className="dropdown-item" href="#">Terms &amp; Conditions</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </div>
  );
}