import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './ItemSlider.css';
import listItems from '../ItemSlider/dataSlider.json';

const ItemSlider = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  
  return (
    <div className="mTop">
      <div className="Item-header-block">
        <h1>Related Items</h1>
      </div>
      <ItemsCarousel className="slideItems"
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button className="btn slideBtn">{'<'}</button>}
        rightChevron={<button className="btn slideBtn">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {
          listItems.map(row => (
            <div className="slider-block" key={row.id}>
              <img src={row.image}/>
              <h3>{row.name}</h3>
              <p>{row.price}</p>
              <a href="" className="btn">Product details</a>
            </div>
          ))
        }
      </ItemsCarousel>
    </div >
  );
}

export default ItemSlider