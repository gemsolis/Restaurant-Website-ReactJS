import React from 'react';

import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const videoRef=React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo );
    
    if(playVideo) {
      videoRef.current.pause();
    } else{
      videoRef.current.play();
    }
    
    
  }


  return(
    <div className="intro--video">
    <video
      src={meal}
      ref={videoRef}
      type="video/mp4"
      loop
      controls={false}
      muted
    />

    <div className="video-overlay flex--center">
      <div className="video-overlay--controls flex--center" onClick={handleVideo}>
      {playVideo ? (
        <BsPauseFill className="control-overlay"/>
      ) : <BsFillPlayFill  className="control-overlay"/>

      }
      </div>
    

    </div>
  </div>


)}


export default Intro;
