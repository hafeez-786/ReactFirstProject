import React, { useState } from 'react';
import Button from './Button/button';
import './Cart.css';

function WineTable(props) {
  return (
    <div className="table-responsive cartTable">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map(row => (
              <tr key={row.id} id="entireRow">
                <td className="img-block"><img src={row.image} /></td>
                <td>{row.product}</td>
                <td>{row.price}</td>
                <td>
                  <Button />
                </td>
                <td>{row.total}</td>
                <td><button type="button" className="btn btn-remove">X</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default WineTable
