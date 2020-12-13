import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from './Footer';
import {Navbar} from './Navbar';
import { listProductDetails } from '../store/action/productListAction'
import './preview.css';
import RelatedProducts from './RelatedProducts';
export default function Preview(props) {
  const productDetail = useSelector(state => state.productDetail)
  const { products, loading, error } = productDetail
  console.log(products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProductDetails(props.match.params.id))
    return () => {
      //
    }
  }, [])
  const [quantity, setQuantity] = useState({quantity:1})
  const Increment = () => {
    setQuantity(prevState => ({ quantity: prevState.quantity + 1 }));
    if (quantity.quantity > 4) {
      alert("Quantity can't exced above 5 items")
      return setQuantity({
        quantity: 5
      })
    }
  }
  const Decrement = () => {
    setQuantity(prevState => ({ quantity: prevState.quantity - 1 }));
    if (quantity.quantity === 0) {
      alert("Please select Quantity of Item")
      return setQuantity({
        quantity: 0
      })
    }
  }
  const addToCard = ()=>{
    props.history.push("/Addtocard/" + props.match.params.id + "?qty=" + quantity.quantity)
  }
  return (
    loading ?
    (<div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only"></span>
    </div>
    </div>):
    error ? 
    (<div>{error}</div>):
        <div>
        <Navbar/>
          <section aria-label="Main content" role="main" className="product-detail">
            <div itemScope itemType="http://schema.org/Product">
              <div className="shadow">
                <div className="_cont detail-top">
                  <div className="cols">
                    <div className="left-col">
                      <div className="big">
                        <img src={products.imageSrc}></img>
                      </div>
                    </div>
                    <div className="right-col">
                    <ul className="list-inline mb-2">
                <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
              </ul>
                      <h1 itemProp="name">{products.name}</h1>
                      <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
                        <meta itemProp="priceCurrency" content="USD" />
                        <link itemProp="availability" href="https://schema.org/InStock" />
                        <div className="price-shipping">
                          <div className="price" id="price-preview" quickbeam="price" quickbeam-price={800}>
                            ${products.price}
                          </div>
                          <a>Free shipping</a>
                        </div>
                        <div className="swatches">
                          <div className="swatch clearfix">
                            <div className="header">Size</div>
{/*                                 
                                  {Object.values(products.size).map(x=>(
                                     <div data-value="M" className='swatch-element plain xl available active'>
                                     <input id="swatch-0-x" type="radio" name="option-0" />
                                    <label htmlFor="swatch-0-x">
                                      {x}  
                                    </label>
                                    </div>
                                  ))}          */}
                          </div>
                          <div className="swatch clearfix" data-option-index={1}>
                            <div className="header">Color</div>
                            <div data-value="Blue" className="swatch-element color blue available">
                              <div className="tooltip">Blue</div>
                              <input quickbeam="color" id="swatch-1-blue" type="radio" name="option-1" defaultValue="Blue" defaultChecked />
                              <label htmlFor="swatch-1-blue" style={{ borderColor: 'blue' }}>
                                <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                                <span style={{ backgroundColor: 'blue' }} />
                              </label>
                            </div>
                            <div data-value="Red" className="swatch-element color red available">
                              <div className="tooltip">Red</div>
                              <input quickbeam="color" id="swatch-1-red" type="radio" name="option-1" defaultValue="Red" />
                              <label htmlFor="swatch-1-red" style={{ borderColor: 'red' }}>
                                <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                                <span style={{ backgroundColor: 'red' }} />
                              </label>
                            </div>
                            <div data-value="Yellow" className="swatch-element color yellow available">
                              <div className="tooltip">Yellow</div>
                              <input quickbeam="color" id="swatch-1-yellow" type="radio" name="option-1" defaultValue="Yellow" />
                              <label htmlFor="swatch-1-yellow" style={{ borderColor: 'yellow' }}>
                                <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" />
                                <span style={{ backgroundColor: 'yellow' }} />
                              </label>
                            </div>
                          </div>
                          <div className="guide">
                            <a>Size guide</a>
                          </div>
                        </div>
                        {/* <form method="post" enctype="multipart/form-data" id="AddToCartForm"> */}
                        <form id="AddToCartForm">
                          <div className="btn-and-quantity-wrap">
                            <div className="btn-and-quantity">
                              <div className="spinner">
                                <span className="btn minus" onClick={() => Decrement()} />
                                <input type="text" name="quantity" value={quantity.quantity} className="quantity-selector" />

                                <span className="q">Qty.</span>
                                <span className="btn plus" onClick={() => Increment()} />
                              </div>
                              <div className="row d-flex justify-content-center">

                                <button id="AddToCart" quickbeam="add-to-cart" onClick={()=>addToCard()}>
                                  <span id="AddToCartText">Add to Cart</span>
                                </button>

                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="tabs">
                          <div className="tab-labels">
                            <span data-id={1} className="active">Info</span>
                            <span data-id={2}>Brand</span>
                          </div>
                          <div className="tab-slides">
                            <div id="tab-slide-1" itemProp="description" className="slide active">
                              We open source it for you https://github.com/greenwoodents/quickbeam.js if you want to use it on your ecommerce.
                          </div>
                            <div id="tab-slide-2" className="slide">
                              Tony Hunfinger
                          </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ScrollAnimation animateIn="fadeIn">
            <RelatedProducts/>
          </ScrollAnimation>
          <Footer/>
        </div>
  )
}
