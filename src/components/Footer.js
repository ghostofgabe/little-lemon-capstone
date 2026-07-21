import { Link } from 'react-router-dom';
import './Footer.css';

// ## Footer Component ##
// three-column layout: branding, nav links, contact info
// semantic <footer> element with contact anchor for nav link

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-col">
          <h3>Little Lemon</h3>
          <p>
            Family-owned Mediterranean restaurant in the heart of Chicago.
            Serving traditional recipes with a modern twist since 1995.
          </p>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><Link to="/booking">Reservations</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <address>
            <p>123 Lemon Street</p>
            <p>Chicago, IL 60601</p>
            <p>
              <a href="tel:+13125551234">(312) 555-1234</a>
            </p>
            <p>
              <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
            </p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
