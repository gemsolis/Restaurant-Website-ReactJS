import React from 'react';


import SubHeading from '../../components/SubHeading/SubHeading'
import './Newsletter.css';

const Newsletter = () => (
  <div className="newsletter--container section--padding">
    <SubHeading title="Newsletter"/>
    <h2 className="newsletter-title headtext__cormorant">Subscribe To Our Newsletter</h2>
    <p className="newsletter-subtitle p__opensans">And never miss the latest Updates!</p>
    <div className="newsletter-input">
      <input type="text" placeholder="Email Address" className="newsletter-form" />
      <button className="custom--button newsletter-subscribe">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
