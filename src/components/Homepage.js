import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

// ## Homepage Component ##
// composes the landing page from individual sections
// each section is its own component for clean separation

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
