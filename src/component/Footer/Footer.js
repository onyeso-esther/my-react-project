// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { FaFontAwesome } from 'react-icons/fa';
// import {faTwitter, faFacebook,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import image from "./Vector.png"
import image2 from "./bird(1).png";
import image3 from "./Frame.png";
import image4 from "./insta.png";
import './Footer.css'; // Import your CSS file
import logo from "../Header/Logo-B6 (2).png";


const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <img src={logo}alt="Company Logo" className="footer-logo" />
          <p>REBORN STUDIO AB</p>
          <p>Org.nr: 559264-1871</p>
          <p>Lunar Holding LDA</p>
          <p><a href="mailto:info@dapixel.io">info@dapixel.io</a></p>
          <p><a href="tel:+46720478390">+467-20478390</a></p>
          <div className="social-icons">
          <img src={image} width={30}/>
          <img src={image2} width={80}/>
          <img src={image3} width={80}/>
          <img src={image4} width={80}/>
          </div>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="home-page-url">Home</a></li>
            <li><a href="about-us-page-url">About Us</a></li>
            <li><a href="lunar-blog-url">Lunar Blog</a></li>
            <li><a href="our-specialists-url">Our Specialists</a></li>
            <li><a href="contact-us-url">Contact Us</a></li>
            <li><a href="privacy-policy-url">Privacy & Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><a href="digital-marketing-url">Digital Marketing</a></li>
            <li><a href="free-audit-url">Free Audit</a></li>
            <li><a href="google-ads-url">Google Ads</a></li>
            <li><a href="cryptocurrency-marketing-url">Cryptocurrency Marketing</a></li>
            <li><a href="seo-url">SEO</a></li>
            <li><a href="saas-marketing-url">SAAS Marketing</a></li>
            <li><a href="website-seo-url">Website & SEO</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;