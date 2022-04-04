import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading';
import {images,data} from '../../constants'

import './SpecialMenu.css';


const SpecialMenu = () => (
  <div className="specialMenu--container section--padding" id="menu">
    <div className="specialMenu--header">
      <SubHeading title="Menu That Fits Your Palette"/>
      <h1 className="specialMenu--title">Today's Special</h1>
    </div>

    <div className="specialMenu--menu">

    <div className="menu--list">
      <h2 className="menu-title">Wine & Beer</h2>
      <div className="menu-items">
        {data.wines.map((wine, index) => (
          <div>
          <div className="menu-name-price">
          <p className="item-name">{wine.title}</p>
          <span className="v-line"></span>
          <p className="item-price">{wine.price}</p>
          </div>
          <p className="item-tags">{wine.tags}</p>            
          </div>
        ))}
      </div>
    </div>

    <div className= "specialMenu--image">
      <img src={images.menu} alt="" className="specialMenu--img"/>
    </div>

    <div className="specialMenu--items">
      <h2 className="menu-title">Cocktails</h2>
      <div className="menu-items">
        {data.cocktails.map((cocktail, index) => (
          <div>
          <div className="menu-name-price">
          <p className="item-name">{cocktail.title}</p>
          <span className="v-line"></span>
          <p className="item-price">{cocktail.price}</p>
          </div>
          <p className="item-tags">{cocktail.tags}</p>            
          </div>
        ))}
      </div>
    </div>

    

    </div>

    <button className="custom--button flex--center">View More</button>
  </div>
);

export default SpecialMenu;
