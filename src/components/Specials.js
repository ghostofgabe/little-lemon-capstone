import './Specials.css';

// ## Specials Section ##
// shows featured menu items as cards
// data is hardcoded since this is a frontend-only project

const specials = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic croutons.',
    emoji: '&#129367;',
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: '$5.99',
    description:
      'Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh tomatoes.',
    emoji: '&#129386;',
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: '$5.00',
    description:
      'This comes straight from grandma\'s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.',
    emoji: '&#127859;',
  },
];

function Specials() {
  return (
    <section className="specials" id="menu">
      <div className="container">
        <div className="specials-header">
          <h2>This Week's Specials</h2>
        </div>
        <div className="specials-grid">
          {specials.map((item) => (
            <article key={item.id} className="special-card">
              <div
                className="special-image"
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: item.emoji }}
              />
              <div className="special-content">
                <div className="special-title-row">
                  <h3>{item.name}</h3>
                  <span className="special-price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
