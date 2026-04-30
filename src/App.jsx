import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TrainProvider } from './context/TrainContext';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import './App.css';

function App() {
  return (
    <TrainProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking/:trainId" element={<BookingPage />} />
          </Routes>
        </div>
      </Router>
    </TrainProvider>
  );
}

export default App;
