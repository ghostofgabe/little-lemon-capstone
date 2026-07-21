import './About.css';

// about section — also the anchor target for the About nav link

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-content">
          <h2>About Little Lemon</h2>
          <p>
            Little Lemon opened its doors in Chicago in 1995. Founded by two
            Italian brothers, Mario and Adrian, the restaurant brings together
            traditional Mediterranean recipes with a modern, seasonal approach.
          </p>
          <p>
            Our chefs work directly with local farmers and markets to source the
            freshest ingredients every week. We believe great food starts with
            great ingredients, and our menu reflects what's at its peak each
            season.
          </p>
          <p>
            Whether you're joining us for a casual weeknight dinner or
            celebrating a special occasion, we want every visit to feel like
            coming home to a family meal.
          </p>
        </div>
        <div className="about-images" aria-hidden="true">
          <div className="about-image-1">
            <span role="img" aria-hidden="true">&#127859;</span>
          </div>
          <div className="about-image-2">
            <span role="img" aria-hidden="true">&#129382;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
