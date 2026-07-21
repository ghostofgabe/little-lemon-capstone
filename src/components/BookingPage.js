import BookingForm from './BookingForm';
import './BookingPage.css';

// booking page layout — gets state + dispatch passed down from App

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
