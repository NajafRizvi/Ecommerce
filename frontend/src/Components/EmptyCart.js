import React from 'react';
import './emptycart.css';
export default function EmptyCart(props) {
  const Redirect = () => {
    props.history.push('/')
  }
  return (
    <div>
      
      <div className="container-fluid mt-50">
        <div className="row">
          <div className="col-md-12">
            <div className=" row d-flex justify-content-center card">
              <div className="row d-flex justify-content-center card-body cart">
                <div className="col-sm-12 empty-cart-cls text-center"> <img src="https://i.imgur.com/dCdflKN.png" width={130} height={130} className="img-fluid mb-4 mr-3" />
                  <h3><strong>Your Cart is Empty</strong></h3>
                  <h4>Add something to make me happy :)</h4>
                  <button className="btn btn-primary cart-btn-transform m-3" data-abc="true" onClick={props.Redirect}>continue shopping</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}
