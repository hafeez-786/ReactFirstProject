import React from 'react';
import './banner.css';
import BannerImg from './Images/bg-3.jpg';

const Banner = props => {
  return (
       <div className="banner-img">
          <img src={BannerImg}/>
       </div>
  )
};

export default Banner