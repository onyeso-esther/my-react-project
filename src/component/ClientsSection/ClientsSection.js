 
 import ClientsImage from "./ClientsImage.png";
 import "./ClientsSection.css";



function ClientsSection() {

  return(
   <div className="testimonials">

      <div className="header">
      <h1>Our Testimonials</h1>
      <hr />
      </div>

     

     <div className="contents">
     <div className="ClientsImage"><img src={ClientsImage} width={200}/></div>
     <div className="text"> 
        <p>Lunar Strategy helped us with our digital<br />
           marketing for 4 months now and still helps us.<br />
           Great service and highly recommended.
        </p>
        <h4>— Kimmo Hakonen - Skrum Master at DaGear AB</h4>
      </div>
     </div>

    </div>
  )
}


export default ClientsSection;