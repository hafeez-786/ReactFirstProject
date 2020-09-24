import React, { Component } from 'react';
import './CartTotal.css';

class CartTotal extends Component {
  render() {
    return (
      <div className="mt-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 cart-left-block">
                  <button type="button" className="btn btn-primary">Update Cart</button>
                </div>
                <div className="col-md-6 cart-left-block">
                  <a href="/wine" type="button" className="btn btn-primary mgtop">Continue Shopping</a>
                </div>
              </div>
              <div className="row Coupon-block">
                <div className="col-md-8 cart-left-block">
                  <h2>Coupon</h2>
                  <p>Enter your coupon code if you have one.</p>
                  <input type="text" placeholder="Coupon code" className="form-control" />
                </div>
                <div className="col-md-4 cart-left-block">
                  <button type="button" className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 padng-right">
              <div className="row">
                <div className="col-md-12 cart-total-right-block no-pad">
                  <div className="row justify-content-end">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <h2 className="heading text-right border-bottom">CART TOTALS</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 cart-bock" style={{ marginTop: "1em" }}>
                          <table className="table">
                            <tbody>
                              <tr>
                                <td className="left-align">Subtotal</td>
                                <td className="right-align">$230.00</td>
                              </tr>
                              <tr>
                                <td className="left-align">Total</td>
                                <td className="right-align">$1050.00</td>
                              </tr>
                            </tbody>
                          </table>

                          <a href="/checkout" type="button" className="btn btn-primary">Proceed To Checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CartTotal