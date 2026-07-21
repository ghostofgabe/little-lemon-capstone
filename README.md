# Little Lemon - Table Reservation App

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?logo=reactrouter&logoColor=white)
![Jest](https://img.shields.io/badge/Tested_with-Jest-C21325?logo=jest&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

A React front-end app for **Little Lemon**, a fictional Mediterranean restaurant in Chicago. Built as the capstone project for the [Meta Front-End Developer Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) on Coursera.

The app features a complete table reservation system with form validation, responsive design, and accessible markup.

---

## Features

- **Table Reservation System** -- date picker, time selector (times update based on selected date), guest count, occasion picker
- **Client-Side Validation** -- real-time error messages, disabled submit until all fields are valid, touched-field tracking so errors don't yell at you before you've even started
- **Responsive Design** -- mobile-first CSS with Grid and Flexbox, breakpoints at 768px and 1024px
- **Accessible** -- semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`), ARIA labels on form inputs, proper heading hierarchy, keyboard navigable
- **React Router v6** -- client-side routing for Home, Booking, and Confirmation pages
- **useReducer for State** -- available booking times managed through a reducer since they depend on the selected date
- **Unit Tests** -- Jest + React Testing Library covering form rendering, validation, state initialization, and reducer logic

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 (CRA) | UI framework |
| React Router v6 | Client-side routing |
| CSS (vanilla) | Styling -- no CSS-in-JS, keeping it straightforward |
| Jest + RTL | Unit testing |
| Google Fonts | Markazi Text + Karla (Little Lemon brand fonts) |

---

## Getting Started

```bash
# clone the repo
git clone https://github.com/ghostofgabe/little-lemon-capstone.git
cd little-lemon-capstone

# install dependencies
npm install

# start the dev server
npm start
```

The app runs at `http://localhost:3000`.

---

## Running Tests

```bash
npm test
```

Tests cover:
- `initializeTimes` returns expected available times from the mock API
- `updateTimes` reducer returns updated times when date changes
- `BookingForm` renders all fields correctly
- Form validation shows errors on touched empty fields
- Submit button is disabled when form is incomplete
- `BookingPage` renders the heading
- `Nav` renders all navigation links

---

## Project Structure

```
src/
├── api.js                    # Mock API (seeded random time slots)
├── App.js                    # Root component, routing, reducer
├── App.css
├── App.test.js               # All unit tests
├── index.js                  # Entry point with BrowserRouter
├── index.css                 # Global styles, CSS variables
└── components/
    ├── Header.js + .css      # Site header with logo
    ├── Nav.js + .css         # Navigation links
    ├── Hero.js + .css        # Landing hero with CTA
    ├── Specials.js + .css    # Featured menu items
    ├── Testimonials.js + .css # Customer reviews
    ├── About.js + .css       # Restaurant backstory
    ├── Footer.js + .css      # Contact info, nav
    ├── BookingForm.js + .css # Reservation form with validation
    ├── BookingPage.js + .css # Form wrapper/layout
    ├── ConfirmedBooking.js + .css # Success page
    └── Homepage.js           # Composes landing page sections
```

---

## Design Decisions

**Why useReducer instead of useState for available times?**
The available time slots depend on the selected date -- when the date changes, the times need to update. A reducer keeps that dependency logic in one place instead of scattering it across multiple `useEffect` calls. It's a cleaner pattern when state transitions depend on actions, similar to how a state machine handles game state.

**Why vanilla CSS?**
The Meta FE capstone specs don't call for CSS-in-JS or utility frameworks. Keeping it vanilla also means the CSS is easy to read and there's no build tooling overhead. Each component gets its own stylesheet for clean separation.

**Why controlled components with manual validation?**
No form library (Formik, React Hook Form, etc.) -- this is a capstone project, so I wanted to show I understand how controlled inputs and validation work under the hood. The validation is simple enough that a library would be overkill anyway.

**Image placeholders instead of real images?**
Used CSS gradients and emoji instead of external image files. Keeps the repo lightweight and avoids any licensing concerns. The layout and design still demonstrate responsive image handling.

---

## License

MIT -- see [LICENSE](./LICENSE)
