import { Link } from 'react-router-dom';
import './Hero.css';

// ## Hero Section ##
// the big intro banner — CTA drives users to the booking page
// placeholder image uses a styled gradient div instead of an external file

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h2 className="hero-title">Little Lemon</h2>
          <h3 className="hero-subtitle">Chicago</h3>
          <p className="hero-description">
            We are a family-owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist. Our menu changes
            with the seasons to bring you the freshest ingredients from local
            farms and markets.
          </p>
          <Link to="/booking" className="btn-primary" aria-label="Reserve a table at Little Lemon">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image" aria-hidden="true">
          <div className="hero-image-placeholder">
            <span role="img" aria-hidden="true">&#127869;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
