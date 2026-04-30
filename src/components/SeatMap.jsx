import React from 'react';
import './SeatMap.css';

const SeatMap = ({ seats, selectedSeats, onSeatClick }) => {
  return (
    <div className="seat-map-container">
      <h3>Select Seats</h3>
      <div className="seat-legend">
        <div className="legend-item"><span className="seat free"></span> Free</div>
        <div className="legend-item"><span className="seat selected"></span> Selected</div>
        <div className="legend-item"><span className="seat booked"></span> Booked</div>
      </div>
      
      <div className="wagon-layout">
        <div className="seats-grid">
          {seats.map((seat) => (
            <button
              key={seat.id}
              disabled={seat.status === 'booked'}
              className={`seat ${seat.status} ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
              onClick={() => onSeatClick(seat.id)}
              title={`Seat ${seat.number}`}
            >
              {seat.number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatMap;
