import './Maincard.css'
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import image1 from './img/image1.png'
import image2 from './img/image2.jpg'
import image3 from './img/image3.jpg'
import image4 from './img/image4.jpg'
import image5 from './img/image5.jpg'
import image6 from './img/image6.jpg'





function Maincard() {
  
    let cards = [
      {
        key: uuidv4(),
        content: <Card imagen={image1} />
      },
      {
        key: uuidv4(),
        content: <Card imagen={image2} />
      },
      {
        key: uuidv4(),
        content: <Card imagen={image3} />
      },
      {
        key: uuidv4(),
        content: <Card imagen={image4} />
      },
      {
        key: uuidv4(),
        content: <Card imagen={image5} />
      },
      {
        key: uuidv4(),
        content: <Card imagen={image6} />
      },
    ];
    
  return (
    <div className="">
      <h1 className='partners'> Our Authorised Partners</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Carousel
        cards={cards}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={200}
        showArrows={false}
      />
    </div>
  );
}

export default Maincard;
