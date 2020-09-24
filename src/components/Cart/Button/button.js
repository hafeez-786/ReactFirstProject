import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  incrementItem = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrementItem = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div className="Quantity-button">
        <div className="input-group-prepend">
          <button className="btn btn-outline-primary" type="button"
            onClick={this.decrementItem}
          >-</button>
        </div>
        <input type="text" value={this.state.count} onChange={this.incrementItem} className="input-box" />
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="button"
            onClick={this.incrementItem}
          >+</button>
        </div>
      </div>
    )
  }
}

export default Button