import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';
import KidsProfileSetup from './components/KidsProfileSetup';
import AddKidPage from './components/AddKidPage';
import AddFoodLaunch from './components/AddFoodLaunch';
import Overlay from './components/Overlay';
import EditModal from './components/EditModal';
// import DailyProgressSummary from './components/DailyProgressSummary';
// import AddFoodLaunch from './components/AddFoodLaunch';


function App() {
  return (
    <div className="App">

      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LogInPage} />
      <Route exact path ="/kidsprofilesetup" component={KidsProfileSetup} />
      <Route exact path ="/addkidpage" component={AddKidPage} />

      {/* <AddFoodLaunch /> */}

      <Route exact path='/test/EditModal' render={props => <Overlay {...props}><EditModal {...props} /></Overlay>} />
    </div>
  );
}

export default App;
