import React, { Component } from 'react'
import './ContentStyle.css';
import { Button, Modal, Form } from 'react-bootstrap';
import data from '../Content/Peragraph.json';
import Img1 from './Images/image_03.jpg';
import Img2 from './Images/image_04.jpg';
import Img3 from './Images/image_05.jpg';
import Img4 from './Images/image_06.jpg';
import Img5 from './Images/image_07.jpg';

class Content extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
  handleModal() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const heading = ['You can cancel your 30 days free trial at any time!'];
    const subHeading1 = ['Listen everywhere'];
    const subHeading2 = ['Unlimited food'];
    const subHeading3 = ['Beautiful nature'];
    const subHeading4 = ['Delicious Food'];
    const subHeading5 = ['Awesome breakfast'];
    return (
      <div className="container">
        <div className="Modal-block">
          <Modal show={this.state.show} onHide={() => this.handleModal()}>
            <Modal.Header closeButton>
              <h3 className="Modal-heading">Please sign up</h3>
            </Modal.Header>
            <Modal.Body className="ModalBody">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share our email with anyone else.
                 </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <button variant="primary" type="submit" className="button-btn">
                  Submit
              </button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
        <div className="mainHeading">
          <h1>{heading}</h1>
          <p>
            While React provides a powerful framework for front-end web development, developers may
            still look to import features from Bootstrap. Enter React-Bootstrap, a library of reusable 
            front-end components combining the structure of React with the look-and-feel of Bootstrap. 
            React-Bootstrap removes the redundancies of ordering HTML elements and 
            and instead uses pure JavaScript to have React take over page-rendering entirely.
          </p>
        </div>
        <div className="row">
          <div className="Card-block">
            <div className="Img-block">
              <img src={Img1} />
              <div>
                <h2 className="sub-heading">{subHeading1}</h2>
                {
                  data.WebContent.map((content) => {
                    return (
                      <div key={content.id}>
                        <p>{content.Area}</p>
                      </div>
                    );
                  })
                }
                <div className="btn-block">
                  <button type="button" className="button-btn" onClick={() => { this.handleModal() }}>Book now</button>
                </div>
              </div>
            </div>
            <div className="Img-block">
              <img src={Img2} />
              <div>
                <h2 className="sub-heading">{subHeading2}</h2>
                {
                  data.WebContent1.map((content1) => {
                    return (
                      <div key={content1.id}>
                        <p>{content1.Area1}</p>
                      </div>
                    );
                  })
                }
                <div className="btn-block">
                  <button type="button" className="button-btn" onClick={() => { this.handleModal() }}>Book now</button>
                </div>
              </div>
            </div>
            <div className="Img-block">
              <img src={Img3} />
              <div>
                <h2 className="sub-heading">{subHeading3}</h2>
                {
                  data.WebContent2.map((content2) => {
                    return (
                      <div key={content2.id}>
                        <p>{content2.Area2}</p>
                      </div>
                    );
                  })
                }
                <div className="btn-block">
                  <button type="button" className="button-btn" onClick={() => { this.handleModal() }}>Book now</button>
                </div>
              </div>
            </div>
            <div className="Img-block">
              <img src={Img4} />
              <div>
                <h2 className="sub-heading">{subHeading4}</h2>
                {
                  data.WebContent3.map((content3) => {
                    return (
                      <div key={content3.id}>
                        <p>{content3.Area3}</p>
                      </div>
                    );
                  })
                }
                <div className="btn-block">
                  <button type="button" className="button-btn" onClick={() => { this.handleModal() }}>Book now</button>
                </div>
              </div>
            </div>
            <div className="Img-block">
              <img src={Img5} />
              <div>
                <h2 className="sub-heading">{subHeading5}</h2>
                {
                  data.WebContent4.map((content4) => {
                    return (
                      <div key={content4.id}>
                        <p>{content4.Area4}</p>
                      </div>
                    );
                  })
                }
                <div className="btn-block">
                  <button type="button" className="button-btn" onClick={() => { this.handleModal() }}>Book now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content
