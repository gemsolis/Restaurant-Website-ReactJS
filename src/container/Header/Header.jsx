import React from 'react';
import './Header.css';
import images from '../../constants/images';
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => (
  <div>
    <header className="header--container section--padding" id="home">
      <div className="hero--content">
        <SubHeading title="Chase the Authentic Flavour" />
        <h1 className="hero--title">The Key to Fine Dining</h1>
        <p className="hero-slogan">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
        <button className="custom--button">Explore More</button>
      </div>
      <div className="hero--img">
        <img className="welcome--img" src={images.welcome} alt="Welcome" />
      </div>
    </header>
  </div>
);

export default Header;
