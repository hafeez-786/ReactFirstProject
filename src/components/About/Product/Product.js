import React, { Component } from 'react';
import './Product.css';
import Wine3 from '../Product/Images/wine_3.png';
import Wine2 from '../Product/Images/wine_2.png';
import Wine1 from '../Product/Images/wine_1.png';

class ProductWise extends Component {
  render() {
    return (
      <div className="container">
        <div className="Product-block">
          <div className="Products-heading">
            <h1>OUR PRODUCTS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
            <a href="/wine">View All Products &#8594;</a>
            <a href="/DatatablePage">Wines Data Table &#8594;</a>
          </div>
          <div className="Product-list">
            <div className="Wine-Product">
              <a href="/cart">
                <img src={Wine3} alt="Wine" />
              </a>
              <div>
                <h3 className="heading">
                  <a href="/">
                    Trius Cabernet France 2020
                </a>
                </h3>
                <span className="price">$629.00</span>
              </div>
              <div className="Wine-action">
                <h3 className="heading">
                  <a href="/">
                    Trius Cabernet France 2020
                  </a>
                </h3>
                <span className="price">$629.00</span>
                <div className="rating">
                  <span className="icon-star">&#9733;</span>
                  <span className="icon-star">&#9733;</span>
                  <span className="icon-star">&#9733;</span>
                  <span className="icon-star">&#9733;</span>
                  <span className="icon-star-o">&#9733;</span>
                </div>
                <a href="/cart" className="btn add"><span className="icon-shopping-bag"></span>
                 Add to Cart
                </a>
              </div>
            </div>
            <div className="Wine-Product">
              <a href="/cart">
                <img src={Wine2} alt="Wine" />
              </a>
              <div>
                <h3 className="heading">
                  <a href="/">
                    Trius Cabernet France 2020
                </a>
                </h3>
                <span className="price">$629.00</span>
              </div>
              <div className="Wine-action">
                <h3 className="heading">
                  <a href="/">
                    Trius Cabernet France 2020
                  </a>
                </h3>
                <span className="price">$629.00</span>
                <div className="rating">
                  <span className="icon-star">&#9733;</span>
                  <span className="icon-star">&#9733;</span>
                  <span className="icon-star">&#9733;</span>
                  <span className="icon-star">&#9733;</span>
                  <span className="icon-star-o">&#9733;</span>
                </div>
                <a href="/cart" className="btn add"><span className="icon-shopping-bag"></span>
                 Add to Cart
                </a>
              </div>
            </div>
            <div className="Wine-Product">
              <a href="/cart">
                <img src={Wine1} alt="Wine" />
              </a>
              <div>
                <h3 className="heading">
                  <a href="/">
                    Trius Cabernet France 2020
                </a>
                </h3>
                <span className="price">$629.00</span>
              </div>
              <div className="Wine-action">
                <h3 className="heading">
                  <a href="/">
                    Trius Cabernet France 2020
                  </a>
                </h3>
                <span className="price">$629.00</span>
                <div className="rating">
                  <span className="icon-star">&#9733;</span>
                  <span className="icon-star">&#9733;</span>
                  <span className="icon-star">&#9733;</span>
                  <span className="icon-star">&#9733;</span>
                  <span className="icon-star-o">&#9733;</span>
                </div>
                <a href="/cart" className="btn add"><span className="icon-shopping-bag"></span>
                 Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductWise