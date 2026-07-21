import { Link } from 'react-router-dom';
import './Nav.css';

// ## Navigation Component ##
// main site navigation — uses React Router Links for client-side routing
// semantic <nav> with aria-label for screen readers

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
