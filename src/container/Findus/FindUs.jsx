import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading'
import {images} from '../../constants'


import './FindUs.css';

const FindUs = () => (
  <div className="findUs--container section--padding app__bg" id="contact">
    <div className="findUs--info">
      <SubHeading title="Contact"/> 
      <h2 className="headtext__cormorant">Find Us</h2>
      <p className="findUs-address p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath CW9 75G</p>
      <h3 className="findUs-hourtitle  p--cormorant">Opening Hours</h3>
      <p className="findUs-openinghours p__opensans">Mon-Fri: 10:00 am-02:00 am</p>
      <p className="findUs-openinghours p__opensans">Sat-Sun: 10:00 am-03:00 am</p>
      <button className="custom--button">View Us</button>
    </div>
    <div className="findUs-image">
      <img src={images.findus} alt="Find Us" className="findUs-img"/>
    </div>
  </div>
);

export default FindUs;
