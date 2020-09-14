import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Landing from './components/auth/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Donor from './components/donor/Donor'
import Reciever from './components/reciever/Reciever'
import SearchDonor from './components/search-donor/SearchDonor'

//redux
import store from './redux-tools/store/store';
import { Provider } from 'react-redux';
import { loadUser } from './redux-tools/action/auth';
import { setAuthToken } from './utils/setAuthToken';

// if (localStorage.token) {
//   // console.log("Token Present");
//   setAuthToken(localStorage.token);
// }

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" render={Landing} />
            <Route exact path="/register" render={Register} />
            <Route exact path="/login" render={Login} />
            <Route exact path="/home" render={Banner} />
            <Route exact path="/donor-registration" render={Donor} />
            <Route exact path="/reciever-registration" render={Reciever} />
            {/* <Route exact path="/" render={SearchDonor} /> */}
          </Switch>
          {/* <AboutUs /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
