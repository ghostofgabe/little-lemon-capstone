import { Link } from 'react-router-dom';
import './ConfirmedBooking.css';

// shows after successful booking

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking">
      <div className="container confirmed-inner">
        <div className="confirmed-icon" aria-hidden="true">&#9989;</div>
        <h2>Reservation Confirmed!</h2>
        <p>
          Your table at Little Lemon has been booked. We look forward to
          welcoming you. You'll receive a confirmation email with the details.
        </p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
