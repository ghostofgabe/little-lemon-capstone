# Little Lemon - Table Reservation App

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?logo=reactrouter&logoColor=white)
![Jest](https://img.shields.io/badge/Tested_with-Jest-C21325?logo=jest&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

Capstone project for the [Meta Front-End Developer Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) on Coursera. It's a React app for a fictional restaurant (Little Lemon) with a table booking system.

---

## Features

- Table reservation form with date, time, guests, and occasion
- Times update based on selected date (fetched from a mock API)
- Client-side validation -- errors only show after you interact with a field
- Responsive layout (mobile-first, breakpoints at 768px and 1024px)
- Semantic HTML and ARIA attributes for accessibility
- React Router v6 for page navigation
- useReducer to manage available time slots
- Unit tests with Jest and React Testing Library

---

## Tech Stack

| Tool | What it does |
|------|---------|
| React 19 (CRA) | UI framework |
| React Router v6 | Client-side routing |
| CSS | Styling, one stylesheet per component |
| Jest + RTL | Unit testing |
| Google Fonts | Markazi Text + Karla |

---

## Getting Started

```bash
git clone https://github.com/ghostofgabe/little-lemon-capstone.git
cd little-lemon-capstone
npm install
npm start
```

Runs at `http://localhost:3000`.

---

## Tests

```bash
npm test
```

Covers:
- initializeTimes and updateTimes reducer logic
- BookingForm renders all fields
- Validation errors show on touched empty fields
- Submit button disabled when form is incomplete
- BookingPage heading renders
- Nav links render

---

## Project Structure

```
src/
├── api.js                    # Mock API (seeded random time slots)
├── App.js                    # Root component, routing, reducer
├── App.css
├── App.test.js               # Unit tests
├── index.js                  # Entry point
├── index.css                 # Global styles + CSS variables
└── components/
    ├── Header.js + .css
    ├── Nav.js + .css
    ├── Hero.js + .css
    ├── Specials.js + .css
    ├── Testimonials.js + .css
    ├── About.js + .css
    ├── Footer.js + .css
    ├── BookingForm.js + .css
    ├── BookingPage.js + .css
    ├── ConfirmedBooking.js + .css
    └── Homepage.js
```

---

## Design Decisions

**useReducer instead of useState for times** -- The available times depend on which date you pick, so when the date changes the times need to update too. A reducer keeps that logic together instead of spreading it across effects.

**Vanilla CSS** -- The capstone doesn't require any CSS framework so I just used regular CSS. Each component has its own stylesheet.

**No form library** -- I could've used Formik or React Hook Form but the validation here is simple enough to do manually, and I wanted to show I understand how controlled inputs actually work.

**Emoji placeholders** -- Used emoji and CSS gradients instead of images to keep the repo small and avoid dealing with image licensing.

---

## License

MIT -- see [LICENSE](./LICENSE)
