import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading';
import {images,data} from '../../constants'
import './Laurels.css';


const AwardItems = ({ award:{imgUrl, title, subtitle}}) => (


  <div className="awards-item">
    <img src={imgUrl} alt="award rank" className="award-img" />
    <div className="award-info">
      <p className="award-title">{title}</p>
      <p className="award-subtitle">{subtitle}</p>
    </div>
  

  </div>



);

const Laurels = () => (
  <div className="app__bg section--padding awards--container" id="awards">
    <div className="award--badge">
    <img src={images.logo} alt="badge" className="badge-img"/>
    </div>
    <div className="award-content">
      
      <SubHeading title="Awards & Recognition"/>
      <h2 className="headtext__cormorant">Our Laurels</h2>
      <div className="awards-laurels">
      {data.awards.map((award) => (
          <AwardItems award={award} key={award.title}/>
        ))}
      </div>

    </div>
    <img src={images.laurels} alt="laurels" className="laurels-img"/>
  </div>

);

export default Laurels;
