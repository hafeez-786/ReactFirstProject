import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import '../About/Product/Product.css'
import './Wine.css';
import ProductWise from '../About/Product/Product';

class Wine extends Component {
  render() {
    return (
      <div className="WineShop">
        <div class="Products-heading1">
          <h1>OUR PRODUCTS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
        </div>
        <Fade left>
          <ProductWise />
          <ProductWise />
          <ProductWise />
          <ProductWise />
        </Fade>
      </div>
    )
  }
}

export default Wine
