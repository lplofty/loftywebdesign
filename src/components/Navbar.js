import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
    return (
        <div className='header flex'>
            <div className='header-logo flex'>
                <h2>Lofty</h2>
                <h3>Web Design</h3>
            </div>
            <div className='header-links flex'>
                <ul>
                    <NavLink to='/' activeClassName="selected"><li>Home</li></NavLink>
                    <NavLink to='/about' activeClassName="selected"><li>About</li></NavLink>
                    <NavLink to='/services' activeClassName="selected"><li>Services</li></NavLink>
                    <li>Portfolio</li>
                    <NavLink to='/contact' activeClassName="selected"><li>Contact</li></NavLink>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
