import "./FreeMeetingSection.css";

function FreeMeetingSection() {

  return(
    <div className="meeting">
      

      <div className="meeting2">
        <div className="free">
       <div className="line"><hr /></div>
          <h1>Book A Free Digital<br />Marketing Consultation</h1>
         
        </div>

        <div className="buttons">
          <form className="form">
            <input type="email" id="email" name="email" placeholder="Your Email"></input>
          </form>
        

           <br></br>
           <button className="button2">Book my free meeting</button>
        </div>
      </div>
     
    </div>

  )
}

export default FreeMeetingSection;