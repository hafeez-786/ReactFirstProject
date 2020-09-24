import React, { Component } from 'react';
import '../Checkout/Checkout.css';
import './Thankyou.css';
import Check from '../ThankYou/check.png';
import Fade from 'react-reveal/Fade';

class Thankyou extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Fade left>
            <div className="col-md-12 mgTop body-block">
              <div className="Thankyou-block">
                <div className="text-center">
                  <img src={Check} alt="checked" />
                  <h1>Thank you!</h1>
                  <p>Your order was successfully completed.</p>
                  <a href="/" className="btn CommonBtn">Back to home</a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}

export default Thankyou
