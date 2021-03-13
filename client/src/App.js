import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//components
import Landing from './components/auth/Landing'
import PrivateRoute from './components/private-route/PrivateRoute'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Donor from './components/donor/Donor'
import Reciever from './components/reciever/Reciever'
import SearchDonor from './components/search-donor/SearchDonor'
import MyProfile from './components/my-profile/MyProfile'
import AboutUs from './components/aboutus/AboutUs'
import ContactUs from './components/contact-us/ContactUs'
import Alert from './components/alert/Alert';
import Feedback from './components/feedback/Feedback';

//redux
import store from './redux-tools/store/store';
import { Provider } from 'react-redux';
import { loadUser } from './redux-tools/action/auth';
import { setAuthToken } from './utils/setAuthToken';

if (localStorage.token) {
  // console.log("Token Present");
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Route render={props => <Navbar {...props} />} />
          <Route exact path="/" component={Landing} />
          <div style={{ marginTop: '50px' }} >
            <Alert />
          </div>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Banner} />
            <PrivateRoute path="/donor-registration" component={Donor} />
            <PrivateRoute path="/reciever-registration" component={Reciever} />
            <PrivateRoute path="/search-donor" component={SearchDonor} />
            <PrivateRoute path="/my-profile" component={MyProfile} />
            <PrivateRoute path="/feedback" component={Feedback} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact-us" component={ContactUs} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
