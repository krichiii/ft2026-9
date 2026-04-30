import React from 'react';
import './WagonSelector.css';

const WagonSelector = ({ wagons, activeWagonId, onWagonSelect }) => {
  return (
    <div className="wagon-selector">
      <h3>Select Wagon</h3>
      <div className="wagon-list">
        {wagons.map((wagon) => (
          <button
            key={wagon.id}
            className={`wagon-btn ${activeWagonId === wagon.id ? 'active' : ''}`}
            onClick={() => onWagonSelect(wagon.id)}
          >
            <div className="wagon-number">Wagon {wagon.id}</div>
            <div className="wagon-type">{wagon.type}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WagonSelector;
