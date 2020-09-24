import React, { Component } from 'react'
import Bank from './BankDetails';
import './Order.css';

class Order extends Component {
  render() {
    const OrderData = [
      { name: "Bioderma x 1", total: "$55.00" },
      { name: "Ibuprofeen x 1", total: "$45.00" },
      { name: "Cart Subtotal", total: "$350.00" },
      { name: "Order Total", total: "	$350.00" }

    ]
    return (
      <div className="row">
        <div className="col-md-12 col-xs-12 Order-blk mrgn-top">
          <h1 className="heading mb">Your Order</h1>
          <div className="p-lg-5 border">
            <div className="Order-table mb1">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Table</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    OrderData.map(row => (
                      <tr>
                        <td>{row.name}</td>
                        <td>{row.total}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className="bank-details">
              <Bank />
              <a href="/thankyou" className="btn CommonBtn">Place Order</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Order
