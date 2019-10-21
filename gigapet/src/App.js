import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SignUpPage from './components/SignUpPage';
// import DailyProgressSummary from './components/DailyProgressSummary';
// import AddFoodEntry from './components/AddFoodEntry';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={WelcomePage} />
      <Route path="/signup" component={SignUpPage} />
    </div>
  );
}

export default App;
