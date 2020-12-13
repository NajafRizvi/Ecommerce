import React from 'react';
import product1 from '../img/product-1.jpg'
import product2 from '../img/product-2.jpg'
import product3 from '../img/product-3.jpg'
import product4 from '../img/product-4.jpg'
import './home.css'
export default function RelatedProducts() {
    return (
        <div className="container">
              {/* RELATED PRODUCTS*/}
        <h2 className="h5 text-uppercase mb-4">Related products</h2>
        <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="product-grid6">
              <div className="product-image6">
                <a href="#">
                  <img className="pic-1" src={product1} />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title"><a href="#">Apple Airpods</a></h3>
                <div className="price">$11.00
                  <span>$14.00</span>
                </div>
              </div>
              <ul className="social">
                <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid6">
              <div className="product-image6">
                <a href="#">
                  <img className="pic-1" src={product2} />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title"><a href="#">Nike Sneakers</a></h3>
                <div className="price">$8.00
                  <span>$12.00</span>
                </div>
              </div>
              <ul className="social">
                <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid6">
              <div className="product-image6">
                <a href="#">
                  <img className="pic-1" src={product3} />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title"><a href="#">Mens Wrist Watches</a></h3>
                <div className="price">$11.00
                  <span>$14.00</span>
                </div>
              </div>
              <ul className="social">
                <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid6">
              <div className="product-image6">
                <a href="#">
                  <img className="pic-1" src={product4} />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title"><a href="#">Men's Shirt</a></h3>
                <div className="price">$11.00
                  <span>$14.00</span>
                </div>
              </div>
              <ul className="social">
                <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
