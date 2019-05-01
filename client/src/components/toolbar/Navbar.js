import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Navbar.css'

const navbar = props => (
    <header className="navbar">
        <nav className="navbar-navigation">
            <div className="navbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="navbar-logo"><a href="/">The Logo</a></div>
            <div className="spacer"></div>
            <div className="navbar-navigation-items">
                <ul>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar;




