import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import '../Components/Components.css'

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Products",
      text: "You can Easily Pick Your Order By Visting Our Sites / Store Neary By",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Choose The Products Best Fits to you & Wear like a WoW !!! ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Available on fastest Deliveries 9 AM to 6 PM , One Day Delivery Available For NearBy Locations",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          "Ours inbound leads have grown so dramatically from our website and search optimization that we have created a happy customer that now"
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;