import React, { Component } from 'react'
import './Checkout.css';
import Billing from './BillingDetails/Billing';
import Coupon from './Coupon/Coupon';
import Order from './Order/Order';
import Fade from 'react-reveal/Fade';

class Checkout extends Component {
  render() {
    return (
      <div className="container">
        <div className="Checkout-details-block mgTop">
          <Fade left>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xs-12 left-block">
                <Billing />
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12 right-block">
                <Coupon />
                <Order />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}

export default Checkout
