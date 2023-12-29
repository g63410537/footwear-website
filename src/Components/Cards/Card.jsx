import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";


function Card({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>Brands!</h2>
      <p>
      Does leather stir your senses, your sense of fashion and lifestyle perhaps? Well, there are people everywhere who are fascinated with leather, the style it carries and the mired of expressions it can deliver to culture. 
      </p>
      <div className={Styles.btnn}>
        <Button text="Get-in-touch!" />
      </div>
    </animated.div>
  );
}

export default Card;
