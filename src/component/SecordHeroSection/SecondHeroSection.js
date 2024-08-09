
import image2 from "./Web Design 1.png";
import "./SecondHeroSection.css";


function SecondHeroSection() {
  return(
   <div className="group">
     <div className="group2">
     <h1>Services</h1>
      <h5>All our digital marketing services start with a free 30-minute<br /> consultation call where we find the best<br /> strategy towards reaching your goals.</h5>
      <button className="contact-us-button">Contact Us</button>
    </div>

      <div> <img src={image2} width={500}/></div> 
   </div>

  )
}

export default SecondHeroSection;