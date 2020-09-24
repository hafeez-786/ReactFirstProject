import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom' 

const sideDrawer = props => {
    let drawerClasses = 'side-Drawer';
    if (props.show) {
        drawerClasses = 'side-Drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Wines</Link></li>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default sideDrawer        