import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return(
            <div className="Footer-block">
                <div className="footer-body">
                   <p>
                      Hafeez's first Project © 2019 <a href="/">Terms and Condition</a>  
                   </p>
                </div>
            </div>
        )
    }
}

export default Footer