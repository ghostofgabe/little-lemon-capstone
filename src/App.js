import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './api';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

// ## Available Times Reducer ##
// using useReducer because available times depend on the selected date
// the reducer pattern keeps that dependency logic in one place
// similar to how a game state machine handles transitions

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  // ## Form Submission Handler ##
  // calls the mock API, then navigates to confirmation on success
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    }
  };

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            }
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
