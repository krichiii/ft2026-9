import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Train, Calendar, Clock } from 'lucide-react';
import { useTrains } from '../context/TrainContext';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';
import './BookingPage.css';

const BookingPage = () => {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const { trains, bookSeats } = useTrains();
  const train = trains.find(t => t.id === parseInt(trainId));
  
  const [activeWagonId, setActiveWagonId] = useState(train?.wagons[0]?.id);
  const [selectedSeats, setSelectedSeats] = useState([]);

  if (!train) {
    return (
      <div className="error-page">
        <h2>Train not found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const activeWagon = train.wagons.find(w => w.id === activeWagonId);

  const handleSeatClick = (seatId) => {
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId) 
        : [...prev, seatId]
    );
  };

  const handleBookingSubmit = (passengerData) => {
    bookSeats(train.id, activeWagonId, selectedSeats);
    console.log('Booking confirmed:', {
      train: train.number,
      wagon: activeWagonId,
      seats: selectedSeats,
      passenger: passengerData
    });
    alert(`Success! Booking confirmed for ${selectedSeats.length} seats. Check your email for details.`);
    navigate('/');
  };

  const depTime = new Date(train.departure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const arrTime = new Date(train.arrival).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="booking-page">
      <header className="booking-header">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/')}>
            <ArrowLeft size={20} /> Back
          </button>
          <div className="train-summary">
            <h1>{train.route.from} → {train.route.to}</h1>
            <div className="train-meta">
              <span><Train size={16} /> {train.number}</span>
              <span><Calendar size={16} /> {new Date(train.departure).toLocaleDateString()}</span>
              <span><Clock size={16} /> {depTime} - {arrTime} ({train.duration})</span>
            </div>
          </div>
        </div>
      </header>

      <main className="booking-content container">
        <div className="selection-area">
          <WagonSelector 
            wagons={train.wagons} 
            activeWagonId={activeWagonId} 
            onWagonSelect={(id) => {
              setActiveWagonId(id);
              setSelectedSeats([]); // Clear selected seats when changing wagon
            }} 
          />
          
          <SeatMap 
            seats={activeWagon.seats} 
            selectedSeats={selectedSeats} 
            onSeatClick={handleSeatClick} 
          />
        </div>
        
        <aside className="sidebar">
          <div className="summary-card">
            <h3>Booking Summary</h3>
            <div className="summary-item">
              <span>Selected Seats:</span>
              <span>{selectedSeats.length}</span>
            </div>
            <div className="summary-item total">
              <span>Total Price:</span>
              <span>{selectedSeats.length * train.price} UAH</span>
            </div>
          </div>
          
          <BookingForm 
            selectedSeatsCount={selectedSeats.length} 
            onSubmit={handleBookingSubmit} 
          />
        </aside>
      </main>
    </div>
  );
};

export default BookingPage;
