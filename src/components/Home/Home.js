import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Banner from '../Banner/banner';
import Content from '../Content/Content';

const Home = () => {
    return (
        <div>
            <Banner />
            <Fade left>
                <Content />
            </Fade>
        </div>
    )
}

export default Home

