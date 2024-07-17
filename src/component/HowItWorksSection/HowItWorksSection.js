import image from "./Testimonial (1).png";
import image2 from "./Get Started.png";
import image3 from "./Settings.png";
import image4 from "./Team work.png";
import "./HowItWorksSection.css";

function HowItWorksSection() {

  return (
    <div>
      <h1 className="title">How it works</h1>
     <div className="line"><hr /></div>
      <div className="container">
       <div className="image"><img src={image} width={200}/></div>

          <div className="text">
               <h3>Goal</h3>
               <div className="line2"></div>
               <p>To help your company grow, we want to understand your goals.
               With that, we can provide you with a complete road map
               towards achieving them.</p>
          </div>
        </div>

{/* 2nd box */}
        <div className="container2">
    <div className="image2"> <img src={image2} width={200}/></div>

   <div className="text2">
        <h3>Competitors</h3>
        <div className="line3"></div>
        <p>Everybody wants to be the best in their field. To achieve success, we audit your competitors and find out what is working and what is not. All this to help you save time, money, and effort on things that do not work and focus on what does.</p>
   </div>
 </div>
   

{/* third box */}
<div className="container3">
    <div className="image 3"> <img src={image3} width={300}/></div>

   <div className="text3">
        <h3>Strategy</h3>
        <div className="line4"></div>
        <p>Understanding the steps needed to beat your competitors is essential when understanding the length of the project, and how we will effectively tackle your digital marketing.​ We also make sure to get you the most value for your money.​</p>
   </div>
 </div>

 {/* forth box */}
 <div className="container4">
    <div className="image 4"> <img src={image4} width={300}/></div>

   <div className="text4">
        <h3>Launch</h3>
        <div className="line5"></div>
        <p>Understanding the steps needed to beat your competitors is essential when understanding the length of the project, and how we will effectively tackle your digital marketing.​ We also make sure to get you the most value for your money.​</p>
   </div>
 </div>
   

      </div>
  )
}   

export default HowItWorksSection;
