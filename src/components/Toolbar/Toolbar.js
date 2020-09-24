import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrwaerToggleBtn';
import { Link } from "react-router-dom";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle_button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/">THE WINE</a></div>
            <div className="spacer"></div>
            
                <div className="toolbar_navigation_items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/wine">Wines</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            
        </nav>
    </header>
);

export default toolbar

