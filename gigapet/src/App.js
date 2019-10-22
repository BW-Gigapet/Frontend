import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer'
import WelcomePage from './components/WelcomePage';
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';
// import AddFoodLaunch from './components/AddFoodLaunch';
import Overlay from './components/Overlay';
import EditModal from './components/EditModal';
import Avatar from './components/Avatar';
// import DailyProgressSummary from './components/DailyProgressSummary';
// import AddFoodLaunch from './components/AddFoodLaunch';


function App() {
  return (
    <div className="App">
      {/* <Route path='/' component={Navigation} /> */}
      <Navigation />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LogInPage} />

      {/* <AddFoodLaunch /> */}

      <Route exact path='/test/EditModal' render={props => <Overlay {...props}><EditModal {...props} /></Overlay>} />
      <Route exact path='/test/Avatar' component={Avatar} />
      <Footer />
    </div>
  );
}

export default App;
