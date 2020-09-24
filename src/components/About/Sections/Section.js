import React, { Component } from 'react';
import './Section.css';
import Wine from './Images/img_1.jpg';
import WineShop from './Images/img_2.jpg';

class Section extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="Section-block">
            <div className="img-block">
              <img src={Wine} />
            </div>
            <div className="section-content">
              <h1>How We Started</h1>
              <p>
                Rerum quis soluta, esse, cupiditate voluptate ipsum?
                Sunt unde eos vitae suscipit harum eligendi reprehenderit, illo eaque sit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              </p>
            </div>
            <div className="img-block">
              <img src={WineShop} />
            </div>
            <div className="section-content">
              <h1>What do you need to know?</h1>
              <p>
                Rerum quis soluta, esse, cupiditate voluptate ipsum?
                Sunt unde eos vitae suscipit harum eligendi reprehenderit, illo eaque sit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Section