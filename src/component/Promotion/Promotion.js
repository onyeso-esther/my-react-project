import image from "./ProImage1.png";
import image2 from "./startup.png";
import image3 from "./Group (1).png";
import image4 from "./ProImage1.png"
import "./Promotion.css";


function Promotion() {
  return (
    <div>
            
        <div className="cards-container">
          <div className="card left-card">
            <div className="card-content">
              <div className="card-text">
              <div className="card-icon">
              {/* <img src={image} width={50} /> */}
    
              </div>
                <img src={image} width={100}/>  
                <h3>Facebook Marketing</h3>
                <p>
                Facebook Marketing is a simple, yet powerful marketing platform that allows businesses to market their products
                 and services through the biggest social media platforms (including Instagram as part of Facebook). We offer a 
                 range of marketing services including ad campaigns for 
                increasing brand awareness, promotions, customer loyalty, building your social media following, and much more.
                </p>
                <button>Book a free 30mins meeting</button>
              </div>
              
    
            </div>
          </div>
          <div className="card right-card">
            <div className="card-content">
              <div className="card-text">
              <div className="card-icon">
              {/* <img src={promotion} width={50} /> */}
    
              </div>
              <img src={image2} width={100}/>
                <h3>Google Marketing</h3>
                <p>
                Google gets over 3.5 billion searches per day and with Google Ads you increase your visability significantly. 
                It is the platform that allows you to drive qualitative traffic and good-fit customers, to your business while they're
                 searching for products and services. With Google Ads,
                 you can boost your website traffic, receive more phone calls, and increase your in-store visits and more.
                </p>
                <button>Book a free 30mins meeting</button>
              </div>
              
            </div>
          </div>
    
        </div>
    
    
        <div className="cards-container">
        <div className="card left-card">
          <div className="card-content">
            <div className="card-text">
            <div className="card-icon">
            {/* <img src={promotion} width={50} /> */}
    
            </div>
            <img src={image3} width={100}/>
              <h3>Facebook Marketing</h3>
              <p>
              Facebook Marketing is a simple, yet powerful marketing platform that allows businesses to market their products
               and services through the biggest social media platforms (including Instagram as part of Facebook). We offer a 
               range of marketing services including ad campaigns for 
              increasing brand awareness, promotions, customer loyalty, building your social media following, and much more.
              </p>
              <button>Book a free 30mins meeting</button>
            </div>
            
    
          </div>
        </div>
        <div className="card right-card">
          <div className="card-content">
            <div className="card-text">
            <div className="card-icon">
            {/* <img src={promotion} width={50} /> */}
    
            </div>
            <img src={image4} width={100}/>
              <h3>Google Marketing</h3>
              <p>
              Google gets over 3.5 billion searches per day and with Google Ads you increase your visability significantly. 
              It is the platform that allows you to drive qualitative traffic and good-fit customers, to your business while they're
               searching for products and services. With Google Ads,
               you can boost your website traffic, receive more phone calls, and increase your in-store visits and more.
              </p>
              <button>Book a free 30mins meeting</button>
            </div>
            
          </div>
        </div>
    
      </div>
    
    
    </div>
           
        );
    } 
export default Promotion;