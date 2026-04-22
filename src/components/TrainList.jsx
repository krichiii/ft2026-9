import React from 'react';
import TrainCard from './TrainCard';
import './TrainList.css';

const TrainList = ({ trains }) => {
  if (trains.length === 0) {
    return (
      <div className="no-results">
        <h3>No trains found</h3>
        <p>Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="train-list">
      {trains.map(train => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default TrainList;
