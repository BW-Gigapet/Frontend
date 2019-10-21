import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LogInPage} />
    </div>
  );
}

export default App;
