import BookingForm from './BookingForm';
import './BookingPage.css';

// ## Booking Page ##
// wrapper component that provides layout context for the form
// receives state and dispatch from App via props (lifted state pattern)

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page">
      <div className="container">
        <h2>Reserve a Table</h2>
        <p className="booking-intro">
          Book your table at Little Lemon. Pick a date and time that works for
          you, and we'll have everything ready when you arrive.
        </p>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </section>
  );
}

export default BookingPage;
