import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import DashboardNavigation from './components/DashboardNavigation';
import OnBoardingNavigation from './components/OnBoardingNavigation';
// import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';
import KidsProfileSetup from './components/KidsProfileSetup';
import AddKidPage from './components/AddKidPage';
import SuccessAddKid from './components/SuccessAddKid'
import PrivateRoute from './components/PrivateRoute';
// import AddFoodLaunch from './components/AddFoodLaunch';
import Overlay from './components/Overlay';
import EditModal from './components/EditModal';
import Avatar from './components/Avatar';
import Dashboard from './components/Dashboard';
// import DailyProgressSummary from './components/DailyProgressSummary';
// import AddFoodLaunch from './components/AddFoodLaunch';
// import Editing from './components/Editing'


function App() {
  return (
    <div className="App">

      <Route exact path={["/","/signup","/login","/kidsprofilesetup","/addkidpage","/successaddkid"]} component={OnBoardingNavigation} />
      <Route exact path={["/home","/dashboard","/dashboard/edit"]} component={DashboardNavigation} />
  
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LogInPage} />
      <PrivateRoute exact path={["/dashboard/","/dashboard/edit"]} component={Dashboard} />
      <Route exact path="/kidsprofilesetup" component={KidsProfileSetup} />
      <Route exact path="/addkidpage" component={AddKidPage} />
      <Route exact path="/successaddkid" component={SuccessAddKid} />

      {/* <AddFoodLaunch /> */}

      <Route exact path='/test/EditModal' render={props => <Overlay {...props}><EditModal {...props} /></Overlay>} />
      <Route exact path='/test/Avatar' component={Avatar} />
      {/* <Route exact path='/test/dashboard' component={Dashboard} />
      <Route exact path='/test/edit' component={Editing} /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
