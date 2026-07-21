import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

// landing page — just puts the sections together

function Homepage() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

export default Homepage;
