import React, { createContext, useState, useEffect, useContext } from 'react';
import { trains as initialTrains } from '../data/trains';

const TrainContext = createContext();

export const useTrains = () => useContext(TrainContext);

export const TrainProvider = ({ children }) => {
  const [trains, setTrains] = useState(() => {
    const savedTrains = localStorage.getItem('railway_bookings');
    return savedTrains ? JSON.parse(savedTrains) : initialTrains;
  });

  useEffect(() => {
    localStorage.setItem('railway_bookings', JSON.stringify(trains));
  }, [trains]);

  const bookSeats = (trainId, wagonId, seatIds) => {
    setTrains(prevTrains => {
      return prevTrains.map(train => {
        if (train.id === trainId) {
          return {
            ...train,
            wagons: train.wagons.map(wagon => {
              if (wagon.id === wagonId) {
                return {
                  ...wagon,
                  seats: wagon.seats.map(seat => {
                    if (seatIds.includes(seat.id)) {
                      return { ...seat, status: 'booked' };
                    }
                    return seat;
                  })
                };
              }
              return wagon;
            })
          };
        }
        return train;
      });
    });
  };

  return (
    <TrainContext.Provider value={{ trains, bookSeats }}>
      {children}
    </TrainContext.Provider>
  );
};
