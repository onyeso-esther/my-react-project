import image from "./DeferencePics1.png";
import image2 from "./DeferencePics2.png";
import "./Deference.css";

function Deference() {
  return(
    <div className="grid">
      <h1 className="topic">Make a Difference For Your Business!</h1>
      <div className="square">

          <div className="paragraph">
               <p>We understand that not every company has an in-house department that is always <br /> updated and tracks the algorithms, trends, and changes within digital marketing, but <br /> we strongly believe every company should have somebody to do so!  </p> 
               
              <p>Therefore, we started Lunar Strategy digital marketing agency – to offer companies <br /> solutions that are completely customized to fit their business needs and goals. </p>

               <p>We tailor high-performing marketing strategies intended to serve and benefit your <br /> company long term.</p>

               <p>Lunar Strategy is a professional digital marketing agency with a highly motivated team. </p>
          </div>

          <div className="image"><img src={image} width={300}/></div>

        </div>

{/* 2nd box */}
        <div className="square2">
    <div className="image2"> <img src={image2} width={600}/></div>

   <div className="paragraph2">
        <p>Most of us have profound hands-on experience working with and for Google and Google Ads directly. Our marketing masters also have experience with Facebook Ads and SEO.</p> 

        <p>Our team lives and breathes innovative, quick, and smart digital marketing solutions. We want to help as many businesses as possible to find new potential customers, reengage with old ones to reach far beyond growth expectations.</p>

        <p>Book a meeting with us today, free of charge, and we’ll talk about how we can implement a thorough and solid marketing strategy.</p>
   </div>
 </div>
   
    </div>
  )
}

export default Deference;