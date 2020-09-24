import React, { Component } from 'react';
import './Billing.css';

class Billing extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-xs-12 formRegisterBlock">
          <h1 className="heading mb">Billing Details</h1>
          <div className="p-lg-5 border">
            <div className="form-group">
              <label className="text-c">Country
                 <span className="text-danger">*</span>
              </label>
              <select id="c_country" className="form-control">
                <option value="1">Select a country</option>
                <option value="2">India</option>
                <option value="3">China</option>
                <option value="4">America</option>
                <option value="5">London</option>
              </select>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label className="text-c">First Name
                 <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" id="c_fname" name="c_fname"></input>
              </div>
              <div className="col-md-6">
                <label className="text-c">Last Name
                 <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control"  name="l_fname"></input>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                  <label>Address <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="adress"></input>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label className="text-c">State / Country
                 <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" name="c_fname"></input>
              </div>
              <div className="col-md-6">
                <label className="text-c">Postal / Zip
                 <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" name="l_fname"></input>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label className="text-c">Email Address
                 <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control"  name="c_fname"></input>
              </div>
              <div className="col-md-6">
                <label className="text-c">Phone
                 <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" name="l_fname"></input>
              </div>
            </div>
            <div className="form-group">
              <label className="text_c">Order Notes</label>
              <textarea cols="30" rows="5" className="form-control" placeholder="Write your notes here...">
              </textarea>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Billing
