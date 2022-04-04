import React, {useState} from 'react';
import {CgMenuCheese} from 'react-icons/cg';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import './Navbar.css';

import images from '../../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return(
  <div>
    <nav className="navigation--bar">
      <div className="branding">
        <img className="brand--logo" src={images.gericht} alt="Gerict Restaurant" />
      </div>
      <div className="nav--bar-center">
        <ul className="nav--links">
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutus">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#awards">Awards</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </div>
      <div className="nav---bar-right">
      <ul className="nav--login">
          <li className="login--reg"><a href="#home">Log In/Register</a></li>
          <span className="divider"></span>
          <li className="book--table"><a href="#home">Book Table</a></li>
        </ul>
      </div>
      <div className="navbar--smscreen">
        <CgMenuCheese color="#fff" fontSize={27} className="hamburger--menu" onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
        <div className="navbar--smscreen-overlay">
        <MdOutlineRestaurantMenu fontSize={27} className="overlay--close" onClick={() => setToggleMenu(false)}/>
        <ul className="navlinks--smscreen slide-bottom">
        <li><a href="#home"  onClick={() => setToggleMenu(false)}>Home</a></li>
          <li><a href="#aboutus" onClick={() => setToggleMenu(false)}>About</a></li>
          <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
          <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
          <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contacts</a></li>
        </ul>
        </div>
        )}
      </div>
    </nav>
  </div>
)};

export default Navbar;
