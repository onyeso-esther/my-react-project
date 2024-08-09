import logo from "./Logo-B6 (2).png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(){
  return( 

    
  <div className="first">
  
    <nav className="navbar">
    <Link to="/"> <img src={logo}/> </Link>
    
    <ul className="navbar-nav">

    <Link to="/services" className="nav-link"><li className="nav-item">Services</li></Link>

    <Link to="/LunarSpecialists" className="nav-link"><li className="nav-item">Lunar Specialists</li></Link>

     <Link to="/AboutUs" className="nav-link"><li className="nav-item">About Us</li></Link>

    
      <li className="nav-item dropdown">
      <Link to="/Blog" className="nav-link"><li className="nav-item">Blog</li></Link>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Latest Posts</a>
          <a className="dropdown-item" href="#">Categories</a>
          <a className="dropdown-item" href="#">Archives</a>
        </div>
      </li>
      
        <Link to="/Us" className="nav-link contact-button"><li className="nav-item">Contact Us</li></Link>
    
    </ul>
    
  </nav>
  </div>
  )
}
export default Header;
