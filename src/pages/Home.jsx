import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useTrains } from '../context/TrainContext';
import TrainList from '../components/TrainList';
import './Home.css';

const Home = () => {
  const { trains } = useTrains();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrains = trains.filter(train => 
    train.route.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    train.route.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
    train.number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Railways Ukraine</h1>
        <p>Find and book train tickets across the country</p>
        
        <div className="search-container">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Where are you going? (e.g. Lviv, Kyiv, 705К)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="content-section">
        <div className="results-header">
          <h2>Available Trains</h2>
          <span className="results-count">{filteredTrains.length} found</span>
        </div>
        
        <TrainList trains={filteredTrains} />
      </main>
    </div>
  );
};

export default Home;
