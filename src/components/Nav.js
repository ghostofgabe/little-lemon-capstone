import { Link } from 'react-router-dom';
import './Nav.css';

// nav links — using Link for pages that have routes, regular <a> for scroll anchors

function Nav() {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
