import React from 'react';
import { Train, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './TrainCard.css';

const TrainCard = ({ train }) => {
  const navigate = useNavigate();
  const depTime = new Date(train.departure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const arrTime = new Date(train.arrival).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = new Date(train.departure).toLocaleDateString();

  return (
    <div className="train-card" onClick={() => navigate(`/booking/${train.id}`)}>
      <div className="train-header">
        <span className="train-number"><Train size={18} /> {train.number}</span>
        <span className="train-date">{date}</span>
      </div>
      
      <div className="route-info">
        <div className="station">
          <div className="time">{depTime}</div>
          <div className="city">{train.route.from}</div>
        </div>
        
        <div className="duration-divider">
          <Clock size={14} />
          <span>{train.duration}</span>
          <ArrowRight size={20} />
        </div>
        
        <div className="station">
          <div className="time">{arrTime}</div>
          <div className="city">{train.route.to}</div>
        </div>
      </div>
      
      <div className="train-footer">
        <span className="price">From {train.price} UAH</span>
        <button className="select-btn">Select Seats</button>
      </div>
    </div>
  );
};

export default TrainCard;
