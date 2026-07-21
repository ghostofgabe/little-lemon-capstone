import './Testimonials.css';

// customer reviews

const reviews = [
  {
    id: 1,
    name: 'Maria R.',
    rating: 5,
    text: 'Best Mediterranean food in Chicago. The Greek salad is incredible and the staff always makes us feel welcome.',
  },
  {
    id: 2,
    name: 'James K.',
    rating: 5,
    text: 'We celebrated our anniversary here and it was perfect. The lemon dessert is a must-try. Already planning our next visit.',
  },
  {
    id: 3,
    name: 'Sarah L.',
    rating: 4,
    text: 'Love the seasonal menu changes. You can really taste the freshness. Great spot for a weeknight dinner.',
  },
  {
    id: 4,
    name: 'David M.',
    rating: 5,
    text: 'The online reservation system is so convenient. No more waiting on hold. Food was excellent as always.',
  },
];

function Testimonials() {
  const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Guests Say</h2>
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <article key={review.id} className="review-card">
              <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                {renderStars(review.rating)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">- {review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
