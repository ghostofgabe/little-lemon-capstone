import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App, { initializeTimes, updateTimes } from './App';
import { fetchAPI } from './api';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';
import Nav from './components/Nav';

// need to wrap in BrowserRouter because components use Link
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

// initializeTimes should give us times from the API for today

describe('initializeTimes', () => {
  test('returns a non-empty array of available times', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  test('returns the same result as fetchAPI for today', () => {
    const times = initializeTimes();
    const expected = fetchAPI(new Date());
    expect(times).toEqual(expected);
  });
});

// updateTimes reducer

describe('updateTimes', () => {
  test('returns updated times when UPDATE_TIMES action is dispatched', () => {
    const testDate = '2024-12-25';
    const result = updateTimes([], { type: 'UPDATE_TIMES', date: testDate });
    const expected = fetchAPI(new Date(testDate));
    expect(result).toEqual(expected);
  });

  test('returns current state for unknown action type', () => {
    const currentState = ['17:00', '18:00'];
    const result = updateTimes(currentState, { type: 'UNKNOWN' });
    expect(result).toEqual(currentState);
  });
});

// form tests

describe('BookingForm', () => {
  const mockDispatch = jest.fn();
  const mockSubmit = jest.fn();
  const mockTimes = ['17:00', '18:00', '19:00'];

  const renderForm = () => {
    return renderWithRouter(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );
  };

  test('renders the booking form with all fields', () => {
    renderForm();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit reservation/i })).toBeInTheDocument();
  });

  test('submit button is disabled when form is incomplete', () => {
    renderForm();
    const submitBtn = screen.getByRole('button', { name: /submit reservation/i });
    expect(submitBtn).toBeDisabled();
  });

  test('shows error messages when fields are touched but empty', () => {
    renderForm();
    const dateInput = screen.getByLabelText(/date/i);

    fireEvent.focus(dateInput);
    fireEvent.blur(dateInput);

    expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
  });

  test('calls dispatch when date changes', () => {
    renderForm();
    const dateInput = screen.getByLabelText(/date/i);

    fireEvent.change(dateInput, { target: { value: '2024-12-25' } });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      date: '2024-12-25',
    });
  });

  test('renders available time options', () => {
    renderForm();
    mockTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });
});

// page heading

describe('BookingPage', () => {
  test('renders the Reserve a Table heading', () => {
    renderWithRouter(
      <BookingPage
        availableTimes={['17:00']}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );
    expect(screen.getByText(/reserve a table/i)).toBeInTheDocument();
  });
});

describe('Nav', () => {
  test('renders navigation links', () => {
    renderWithRouter(<Nav />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/menu/i)).toBeInTheDocument();
    expect(screen.getByText(/reservations/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
