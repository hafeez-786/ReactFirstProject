import React from "react";
import { useForm } from "react-hook-form";
import Fade from 'react-reveal/Fade';
import "./Contact.css";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
 

  return (
    <div className="mgTop">
      <Fade top>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <h1 className="contact-heading">Contact Us</h1>
            </div>
          </div>
          <div className="row">
            <div className="form-block col-lg-12 col-md-12 col-xs-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="form-group col-lg-6 col-md-6 col-xs-12">
                    <label>First Name <span className="text-danger">*</span></label>
                    <input name="firstName" className="form-control form-control-lg"
                      defaultValue="" ref={register({ required: true })} />
                    {errors.firstName && <p className="text-danger">First name is required</p>}
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-xs-12">
                    <label>Last Name <span className="text-danger">*</span></label>
                    <input name="lastName" className="form-control form-control-lg"
                      defaultValue="" ref={register({ required: true })} />
                    {errors.lastName && <p className="text-danger">Last name is required</p>}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-lg-6 col-md-6 col-xs-12">
                    <label>Email <span className="text-danger">*</span></label>
                    <input type="email" name="email" className="form-control form-control-lg"
                      defaultValue="" ref={register({ required: true })} />
                    {errors.email && <p className="text-danger">Email is required</p>}
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-xs-12">
                    <label>Contact number <span className="text-danger">*</span></label>
                    <input name="number" className="form-control form-control-lg"
                      defaultValue="" ref={register({ required: true })} />
                    {errors.number && <p className="text-danger">Number is required</p>}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-lg-12 col-md-12 col-xs-12">
                    <label>Message</label>
                    <textarea className="form-control" col="30" row="30">
                    </textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-xs-12 mBottom">
                    <input type="submit" className="btn btn-primary" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Contact
