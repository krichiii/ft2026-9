import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

// Placeholder for Lab 10
const BookingPage = () => (
  <div style={{ padding: '4rem', textAlign: 'center' }}>
    <h1>Booking Page</h1>
    <p>This feature will be implemented in Laboratory 10.</p>
    <button onClick={() => window.history.back()} className="select-btn">Go Back</button>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking/:trainId" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
