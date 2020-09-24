import React, { Component } from 'react';
import './winery.css';
import Daaru from '../Winery/Images/img_1.jpg';
import Daaru1 from '../Winery/Images/img_2.jpg';
import Daaru2 from '../Winery/Images/img_3.jpg';
import Daaru3 from '../Winery/Images/img_4.jpg';
import Daaru4 from '../Winery/Images/img_5.jpg';
import Daaru5 from '../Winery/Images/img_6.jpg';

class Winery extends Component {
  render() {
    return (
      <div className="bg">
        <h1 className="heading">
          Digital Marketing<br /> Resources For Your <br /> Winery
        </h1>
        <div className="container resource-block">
          <div className="wine-card">
            <img src={Daaru} alt="Daaru" />
            <div>
              <h1>MARKETING PR STRATEGY</h1>
              <p>PR Tips for Small Wineries</p>
              <hr />
            </div>
          </div>
          <div className="wine-card">
            <img src={Daaru1} alt="Daaru" />
            <div>
              <h1>WEBSITE</h1>
              <p>Best Winery Shop 2020</p>
              <hr />
            </div>
          </div>
          <div className="wine-card">
            <img src={Daaru2} alt="Daaru" />
            <div>
              <h1>ECOMMERCE</h1>
              <p>Online Store For Your Winery</p>
              <hr />
            </div>
          </div>
        </div>
        <div className="container resource-block">
          <div className="wine-card">
            <img src={Daaru3} alt="Daaru" />
            <div>
              <h1>MARKETING</h1>
              <p>Big Mistake in Your Winery</p>
              <hr />
            </div>
          </div>
          <div className="wine-card">
            <img src={Daaru5} alt="Daaru" />
            <div>
              <h1>WEBSITE</h1>
              <p>Best Winery Shop 2020</p>
              <hr />
            </div>
          </div>
          <div className="wine-card">
            <img src={Daaru4} alt="Daaru" />
            <div>
              <h1>STRATEGY</h1>
              <p>Develop Your Winery By Digital Marketing</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Winery