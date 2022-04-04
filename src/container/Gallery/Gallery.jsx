import React from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';

import SubHeading from '../../components/SubHeading/SubHeading';
import {images} from '../../constants';
import './Gallery.css';




const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
 return(
  <div className="photoGallery--container section--padding app__bg">
    <div className="photoGallery--header">
      <SubHeading title="Instagram"/>
      <h1 className="headtext--cormorant">Photo Gallery</h1>
      <p className="p__opensans">Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="custom--button">View More</div>
    </div>
    <div className="photoGallery--slides">
      <div className="images-container" ref={scrollRef} >
      {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
          <div className="images-card flex--center" key={`gallery_image-${index + 1}`} >
            <img src={image}  alt="gallery"/>
            <BsInstagram className="gallery-overlay" />
          </div>
        ))}
      </div>
      <div className="slides-arrows">
        <BsArrowLeftShort className="slides-icon" onClick={() => scroll('left')}/>
        <BsArrowRightShort className="slides-icon" onClick={() => scroll('right')}/>
      </div>
    </div>


  
  </div>
 )

};



export default Gallery;
