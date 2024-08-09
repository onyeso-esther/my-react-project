
// import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-form-card">
      <div className="contact-info">
        <h2>Let us discuss your marketing strategy!</h2>
        <p>Org.nr: 559264-1871</p>
        <p>Lunar Holding LDA</p>
        <p><a href="mailto:info@lunarstrategy.com">info@lunarstrategy.com</a></p>
        <p><a href="tel:+46720478390">+467-20478390</a></p>
        {/* <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div> */}
        <button className="book-consultation-btn">Book consultation here</button>
      </div>
      <div className="contact-form">
        <h6>Or you can contact us through</h6>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="send-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;