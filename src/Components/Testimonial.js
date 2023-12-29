import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import '../Components/Components.css'

export default function Testimonial () {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        "Ours inbound leads have grown so dramatically from our website and search optimization that we have created a happy customer that now".
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        " I AM VERY HAPPY TO SHARE THIS TO EVEYONE ,
        THE PRODUCTS ARE VERY CLASSY AND AWESOME TO WEAR - FASHION GROWS EVERYWHERE 
        <br></br>THANKS FOR REBEL"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

