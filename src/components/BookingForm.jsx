import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ selectedSeatsCount, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSeatsCount === 0) {
      alert('Please select at least one seat');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="booking-form-container">
      <h3>Passenger Information</h3>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>First Name</label>
          <input 
            type="text" 
            name="firstName" 
            required 
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            required 
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="confirm-btn">
          Confirm Booking ({selectedSeatsCount} seats)
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
