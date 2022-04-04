
import React from 'react';

import './Chef.css';
import {images} from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading'

const Chef = () => (
  <div className="chef--container section--padding app__bg">
      <img src={images.chef} alt="Chef" className="chef-img"/>
    <div className="chef--content">
      <SubHeading title="Chef's Word" />
      <h2 className="chef-heading headtext_cormorant">What We Believe In</h2>
      <p className="chef-quote"><img src={images.quote} alt="quote" className="quote-img"/>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      <p className="chef-name">Kevin Luo</p>
      <p className="p__opensans">Chef & Founder</p>
      <img src={images.sign} alt="chef-signature" className="chef-sign"/>
    </div>
  </div>
);

export default Chef;
