import React from 'react';
import  {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'


import {Newsletter} from '../../components/'
import images from '../../constants/images';
import './Footer.css';

const Footer = () => (
  <div className="footer--container section--padding app__bg" >
    <Newsletter/>
    <div className="footer-info">
      <div className="info-contactus">
        <h2 className="info-title">Contact Us</h2>
        <p className="c-info">9 W 53rd St. New York, NY 10019, USA</p>
        <p className="c-info">+1 212-344-1230</p>
        <p className="c-info">+1 212-555-1230</p>
      </div>
      <div className="info-logosocial">
        <img src={images.gericht} alt="Gericht" className="info-logo"/>
        <p className="info-quote">"The best way to find youself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="Gericht" className="info-spoon"/>
        
        <div className="info-social-links">
          <FiFacebook  className="social-icons"/>
          <FiTwitter className="social-icons"/>
          <FiInstagram className="social-icons"/>
        </div>
      </div>

      <div className="info-workinghours">
        <h2 className="info-title">Working Hours</h2>
        <p className="c-info">Monday-Friday</p>
        <p className="c-info">08:00 am - 12:00 am</p>
        <p className="c-info">Saturday-Sunday</p>
        <p className="c-info">07:00 am - 11:00 am</p>
      </div>
    </div>
    <p className="footer-copyright">2022 Gericht. All Rights Reserved.</p>
  </div>
);

export default Footer;
