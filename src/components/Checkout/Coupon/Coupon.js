import React, { Component } from 'react'

class Coupon extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-xs-12 Coupon-blk">
          <h1 className="heading mb">Coupon Code</h1>
          <div className="p-lg-5 border">
            <div className="form-group row">
              <p>Enter your coupon code if you have one</p>
              <div className="col-lg-6 col-md-12 noPad">
                <input type="text" className="form-control" name="C_code"
                  placeholder="Coupon Code"></input>
              </div>
              <div className="col-lg-3 col-md-12 pad-ryt">
                <button type="button" className="btn CommonBtn">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Coupon