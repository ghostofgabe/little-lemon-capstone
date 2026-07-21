import Nav from './Nav';
import './Header.css';

// ## Header Component ##
// site-wide header with the restaurant branding and navigation
// using semantic <header> for accessibility

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="logo" aria-label="Little Lemon homepage">
          <span className="logo-icon" role="img" aria-label="lemon">&#127819;</span>
          <div className="logo-text">
            <h1>Little Lemon</h1>
            <span className="logo-subtitle">Chicago</span>
          </div>
        </a>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
