import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Banner from '../About/Banner/banner';
import Section from './Sections/Section';
import Winery from '../About/Winery/winery';
import ProductWise from './Product/Product';

const About = () => {
  return (
    <div>
      <Banner />
      <Fade left>
        <Section />
        <hr className="line"></hr>
        <ProductWise />
        <Winery />
      </Fade>
    </div>
  )
}

export default About
