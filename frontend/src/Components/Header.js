import React from 'react';
import tshirt from '../img/T-Shirt-PNG-Background-Image.png';
import {FaUserAlt,FaShoppingCart} from 'react-icons/fa';
import {GrSearch} from 'react-icons/gr';
import {useSelector} from 'react-redux';
import './header.css';
import { Link } from 'react-router-dom';
// import './bootstrap.css';
export default function Design() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  return (
    <div className="main-sec">
        {/* //header */}
        <header className="py-sm-3 pt-3 pb-2" id="home">
          <div className="container">
            {/* nav */}
            <div className="top-w3pvt d-flex">
              <div id="logo">
                <h1> <Link to={'/'}><span className="log-w3pvt">T</span>shirtsus</Link> <label className="sub-des">Online Store</label></h1>
              </div>
              <div className="forms ml-auto">
                <a href="login.html" className="btn"><FaUserAlt size={18}/> Sign In</a>
                <a href="register.html" className="btn"><FaShoppingCart size={18}/> Cart
                {cartItems.length> 0 && (
                <span className="badge bg-danger ml-1">{cartItems.length}</span>
                )}
                </a>
              </div>
            </div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Shope</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Contact</a>
            </li>
            </ul>
          </div>
        </div>
      </nav>

              {/* //nav */}
              <div className="search-form ml-auto">
                <div className="form-w3layouts-grid">
                  <form action="#" method="post" className="newsletter">
                    <input className="search" type="search" placeholder="Search here..." required />
                    <button className="form-control-static mt-2" value><GrSearch/></button>
                  </form>
                </div>
              </div>
              <div className="clearfix" />
            
          </div>
        </header>
        {/* //header */}
        {/*/banner*/}
        <div className="banner-wthree-info container">
          <div className="row">
            <div className="col-lg-5 banner-left-info">
              <h3>The Largest Range <span>of T-Shirts</span></h3>
              <a href="shop.html" className="btn shop">Shop Now</a>
            </div>
            <div className="col-lg-7 banner-img">
              <img src={tshirt} alt="part image" className="img-fluid h-75 w-100" />
            </div>
          </div>
        </div>
      </div>
  )
}

