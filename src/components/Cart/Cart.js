import React, { Component } from 'react';
import WineTable from './Datatable';
import data from './WineData.json';
import Fade from 'react-reveal/Fade';
import CartTotal from './CartTotal/CartTotal';
import ItemSlider from '../ItemSlider/ItemSlider';
import './Cart.css';

class Cart extends Component {
  render() {
    return (
      <div>
        <Fade left>
          <div className="container mt">
            <h1 className="header-heading">Cart</h1>
            <WineTable data={data} />
            <CartTotal />
            <ItemSlider />
          </div>
        </Fade>
      </div>
    )
  }
}

export default Cart
