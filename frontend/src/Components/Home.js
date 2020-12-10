import React, { useEffect } from 'react';
import './home.css';
import Footer from './Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Navbar} from './Navbar';
import {Listproduct} from '../store/action/productListAction'
export default function Home() {
  const productList = useSelector(state => state.productList);
  const { products,loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Listproduct())
    return{
      //
    }
  }, [])
  return(
    loading?
    <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
    </div>:
    error?<div>{error}</div>:
    <div>
    <Navbar/>
    <section className="hero pb-3 bg-cover bg-center d-flex align-items-center">
    <div className="container py-5">
      <div className="row px-4 px-lg-5">
        <div className="col-lg-6">
          <p className="text-muted small text-uppercase mb-2">New Inspiration 2020</p>
          <h1 className="h2 text-uppercase mb-3">20% off on new season</h1><a className="btn btn-dark" href="shop.html">Browse collections</a>
        </div>
      </div>
    </div>
  </section>
    <div className="container mt-4">
      <header className="mt-4">
            <p class="small text-muted small text-uppercase mb-1">Made the hard way</p>
            <h2 class="h5 text-uppercase mb-4">Top trending products</h2>
      </header>
  <ScrollAnimation animateIn='fadeIn'>
      <div className="row">
        {products.map(items=>(
            <div className="col-md-3 col-sm-6">
            <div className="product-grid6" key={items.id}>
              <div className="product-image6">
                <a href="#">
                  <Link to={`/Preview/${items.id}`}><img className="pic-1" src={items.imageSrc} /></Link>
                </a>
              </div>
              <div className="product-content">
                <h3 className="title"><a href="#">${items.price}</a></h3>
                <div className="price">$
                  <span>${items.price}</span>
                </div>
              </div>
              <ul className="social">
                <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
              </ul>
            </div>
          </div> 
        ))}       
      </div>
</ScrollAnimation>
      
    </div>
    <Footer/>
    </div>
     
  )
}
