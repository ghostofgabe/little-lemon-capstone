import { useState } from 'react';
import './BookingForm.css';

// controlled form — each input tied to state, validation on change + submit

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // track which fields user has clicked into so we dont show errors right away
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  // validation — returns error messages for any empty/invalid fields
  const getErrors = () => {
    const errors = {};
    if (!date) {
      errors.date = 'Please select a date';
    }
    if (!time) {
      errors.time = 'Please select a time';
    }
    if (!guests || guests < 1 || guests > 10) {
      errors.guests = 'Guests must be between 1 and 10';
    }
    if (!occasion) {
      errors.occasion = 'Please select an occasion';
    }
    return errors;
  };

  const errors = getErrors();
  const isFormValid = Object.keys(errors).length === 0;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTime('');
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // mark everything as touched so all errors show
    setTouched({ date: true, time: true, guests: true, occasion: true });

    if (!isFormValid) return;

    submitForm({ date, time, guests, occasion });
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Table reservation form"
      noValidate
    >
      {/* date */}
      <div className="form-field">
        <label htmlFor="booking-date">Date</label>
        <input
          type="date"
          id="booking-date"
          value={date}
          onChange={handleDateChange}
          onBlur={() => handleBlur('date')}
          aria-required="true"
          aria-invalid={touched.date && errors.date ? 'true' : 'false'}
          aria-describedby={touched.date && errors.date ? 'date-error' : undefined}
          min={new Date().toISOString().split('T')[0]}
        />
        {touched.date && errors.date && (
          <span className="form-error" id="date-error" role="alert">
            {errors.date}
          </span>
        )}
      </div>

      {/* time — disabled until a date is picked */}
      <div className="form-field">
        <label htmlFor="booking-time">Time</label>
        <select
          id="booking-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          onBlur={() => handleBlur('time')}
          aria-required="true"
          aria-invalid={touched.time && errors.time ? 'true' : 'false'}
          aria-describedby={touched.time && errors.time ? 'time-error' : undefined}
          disabled={!date}
        >
          <option value="">Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {touched.time && errors.time && (
          <span className="form-error" id="time-error" role="alert">
            {errors.time}
          </span>
        )}
      </div>

      {/* guests */}
      <div className="form-field">
        <label htmlFor="booking-guests">Number of Guests</label>
        <input
          type="number"
          id="booking-guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value, 10))}
          onBlur={() => handleBlur('guests')}
          min="1"
          max="10"
          aria-required="true"
          aria-invalid={touched.guests && errors.guests ? 'true' : 'false'}
          aria-describedby={touched.guests && errors.guests ? 'guests-error' : undefined}
        />
        {touched.guests && errors.guests && (
          <span className="form-error" id="guests-error" role="alert">
            {errors.guests}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="booking-occasion">Occasion</label>
        <select
          id="booking-occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          onBlur={() => handleBlur('occasion')}
          aria-required="true"
          aria-invalid={touched.occasion && errors.occasion ? 'true' : 'false'}
          aria-describedby={
            touched.occasion && errors.occasion ? 'occasion-error' : undefined
          }
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Date Night">Date Night</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>
        {touched.occasion && errors.occasion && (
          <span className="form-error" id="occasion-error" role="alert">
            {errors.occasion}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="btn-primary submit-btn"
        disabled={!isFormValid}
        aria-label="Submit reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
