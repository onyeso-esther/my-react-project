import logo from "./Logo-B6 (2).png";
import "./Header.css";

function Header(){
  return( 
  <div className="first">
    <nav className="navbar">
    <a class="navbar-brand" href="#">
    <img src={logo}/>
    </a>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Industries</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Team</a>
      </li>
      <li className="nav-item dropdown">
        <a class="nav-link" href="#">Blog</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Latest Posts</a>
          <a className="dropdown-item" href="#">Categories</a>
          <a className="dropdown-item" href="#">Archives</a>
        </div>
      </li>
      <li className="nav-item">
        <a  className="nav-link contact-button" href="#">Contact Us</a >
      </li>
    </ul>
    
  </nav>
  </div>
  )
}
export default Header;