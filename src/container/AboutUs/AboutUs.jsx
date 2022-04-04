import React from 'react';


import './AboutUs.css';
import {images} from '../../constants/';


const AboutUs = () => (
<div id="aboutus" className="about--us section--padding app__bg">

<div className="about--container flex--center" >

    <img src={images.G} alt="G" className="g-img"/>

    <div className="aboutus--content">
      <div className="aboutus--about">
      <h1 className="about-h1">About Us</h1>
      <img src={images.spoon} alt="spoon" className="about-spoon"/>
      <p className="p__opensans">
      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
      </p>
      <button className="custom--button">Know More</button>
      </div>

    </div>

    <div className="about--knife">
      <img src={images.knife} alt="knife-img" className="knife-img"/>
    </div>

    <div className="aboutus--content">
      <div className="aboutus--history">
      <h1 className="about-h1">Our History</h1>
      <img src={images.spoon} alt="spoon" className="history-spoon"/>
      <p className="p__opensans">
      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
      </p>
      <button className="custom--button">Know More</button>
      </div>

    </div>

  </div>

  <div className="view--btn">
      <button className="custom--button">View More</button>
  </div>


  
</div>
);

export default AboutUs;
