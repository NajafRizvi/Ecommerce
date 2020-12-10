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
        <div className="row">
          {/* PRODUCT*/}
          <div className="col-lg-3 col-sm-6">
            <div className="product text-center skel-loader">
              <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={product1} alt="..." /></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart" /></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand" /></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Kui Ye Chen’s AirPods</a></h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-3 col-sm-6">
            <div className="product text-center skel-loader">
              <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={product2} alt="..." /></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart" /></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand" /></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Air Jordan 12 gym red</a></h6>
              <p className="small text-muted">$300</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-3 col-sm-6">
            <div className="product text-center skel-loader">
              <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={product3} alt="..." /></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart" /></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand" /></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Cyan cotton t-shirt</a></h6>
              <p className="small text-muted">$25</p>
            </div>
          </div>
          {/* PRODUCT*/}
          <div className="col-lg-3 col-sm-6">
            <div className="product text-center skel-loader">
              <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={product4} alt="..." /></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart" /></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand" /></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Timex Unisex Originals</a></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
        </div>
        </div>
    )
}
