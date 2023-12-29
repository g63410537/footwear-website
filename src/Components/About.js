import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";




export default function About() {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        I firmly believe that with the right footwear one can rule the world.
        </h1>
        <p className="primary-text">
        “Craziness in a shoe is great - you can have much more freedom, you can exaggerate and it doesn’t feel stupid.”
        </p>
        <p className="primary-text">
        “Never underestimate the power of a shoe.”
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
         
        </div>
      </div>
    </div>
   
  );
  
  
};

