import image from "./AboutPics1.png";
import "./ThirdHeroSection.css";

function ThirdHeroSection() {
  return (

    <div className="general">
      <div>
        <h1>Consistency - Drive - <br />
        Curiosity - Passion​</h1> 
        <h3>In a constantly evolving and competitive digital world, it is <br /> imperative to stay on top and in the know, be highly visible among <br /> search results and feeds, and be responsive to your audience.</h3>
      </div>

      <div>
      <img src={image} width={500}/>
      </div>

    </div>



  )

}

export default ThirdHeroSection;
