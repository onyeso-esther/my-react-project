import image from "./Group.png";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="herosection1">
      <div> 
        <h1>We help you grow <br></br> your <span className="colored">conversions.</span></h1>
        <h6>Featured in leading publications around the world</h6>
        <button className="contact-us-button">Contact Us</button>
      </div>
         <img src={image} width={500}/>
      
    </div>
  )
}

export default HeroSection;