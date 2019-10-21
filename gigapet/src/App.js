import React from 'react';
import logo from './logo.svg';
import './App.css';
import DailyProgressSummary from './components/DailyProgressSummary';
import AddFoodEntry from './components/AddFoodEntry';

function App() {
  return (
    <div className="App">
     <DailyProgressSummary />
     <AddFoodEntry />
    </div>
  );
}

export default App;
