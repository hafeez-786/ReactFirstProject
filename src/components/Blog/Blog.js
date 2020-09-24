import React, { Component } from 'react'
import './Blog.css';
import img1 from '../Blog/Images/image1.jpg';
import line from '../Blog/Images/Layer-456.png';
import img2 from '../Blog/Images/image2.jpg';
import img3 from '../Blog/Images/image3.jpg';
import img4 from '../Blog/Images/image4.jpg';
import img5 from '../Blog/Images/image5.jpg';
import img6 from '../Blog/Images/image6.jpg';
import img7 from '../Blog/Images/image7.jpg';
import img8 from '../Blog/Images/image8.jpg';
import img9 from '../Blog/Images/image9.jpg';

class Blog extends Component {
  render() {
    return (
      <div>
        <div className="Blog-banner"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="left-image-blog">
                <img src={img1} alt="image" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="right-content-blog">
                <h3>Welcome</h3>
                <h2>Wine</h2>
                <div className="line-image">
                  <img src={line} alt="image" className="img-fluid" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nulla pariaturexplicabout labore.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main-row">
            <div className="column-left">
              <img src={img2} alt="image" className="img-fluid" />
              <div className="group-tag">
                <a href="#">William Shatner’s New Wine Enterprise</a>
                <p>BY: JOHN DOE / SUNDAY, JANUARY, 8, 2017</p>
                <a href="#">CONTINUE &#8594;</a>
              </div>
            </div>
            <div className="column-right">
              <img src={img3} alt="image" className="img-fluid" />
              <div className="group-tag">
                <a href="#">Recipes from a Winemaker’s Restaurant</a>
                <p>BY: JOHN DOE / SUNDAY, JANUARY, 8, 2017</p>
                <a href="#">CONTINUE &#8594;</a>
              </div>
            </div>
          </div>
          <div className="main-row">
            <div className="column-left">
              <img src={img4} alt="image" className="img-fluid" />
              <div className="group-tag">
                <a href="#">Holiday Gift Guide for the Wine Lover</a>
                <p>BY: JOHN DOE / MONDAY, JANUARY, 30, 2017</p>
                <a href="#">CONTINUE &#8594;</a>
              </div>
            </div>
            <div className="column-right">
              <img src={img5} alt="image" className="img-fluid" />
              <div className="group-tag">
                <a href="#">William Shatner’s New Wine Enterprise</a>
                <p>BY: JOHN DOE / SUNDAY, APRIL, 28, 2017</p>
                <a href="#">CONTINUE &#8594;</a>
              </div>
            </div>
          </div>
          <div className="main-row">
            <div className="column-left">
              <img src={img6} alt="image" className="img-fluid" />
              <div className="group-tag">
                <a href="#">Holiday Gift Guide for the Wine Lover</a>
                <p>BY: JOHN DOE / MONDAY, JANUARY, 30, 2017</p>
                <a href="#">CONTINUE &#8594;</a>
              </div>
            </div>
            <div className="column-right">
              <img src={img7} alt="image" className="img-fluid" />
              <div className="group-tag">
                <a href="#">Bruce Neyers of Neyers Vineyards</a>
                <p>BY: JOHN DOE / SUNDAY, APRIL, 28, 2017</p>
                <a href="#">CONTINUE &#8594;</a>
              </div>
            </div>
          </div>
          <div className="main-row">
            <div className="column-left">
              <img src={img8} alt="image" className="img-fluid" />
              <div className="group-tag">
                <a href="#">Recipes from a Winemaker’s Restaurant</a>
                <p>BY: JOHN DOE / MONDAY, MARCH, 25, 2017</p>
                <a href="#">CONTINUE &#8594;</a>
              </div>
            </div>
            <div className="column-right">
              <img src={img9} alt="image" className="img-fluid" />
              <div className="group-tag">
                <a href="#">Our Furniture Collections Reflect</a>
                <p>BY: JOHN DOE / TUESDAY, MAY, 03, 2017</p>
                <a href="#">CONTINUE &#8594;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Blog
