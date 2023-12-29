import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";
import images from "./Assets/Carousel/index";
import Home from "./Components/Home";
import  About from './Components/About'
import Maincard from "./Components/Cards/Maincard";




export default function App() {
  return (
    <div className="App">

      <Home/>
     
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Carousel
        images={images}
        autoplayInterval={3000}
        showControls={true}
        showIndicators={true}
      />
       <About/>
      
      <Testimonial/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <Maincard/>
      <Work />
      <Contact/>
      <Footer />
    </div>
  );
}

