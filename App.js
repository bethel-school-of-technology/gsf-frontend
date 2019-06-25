import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';


import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './Components/common/PrivateRoute';

import Landing from './Components/Pages/Landing';
import AuthLanding from './Components/Pages/AuthLanding';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
// import Dashboard from './Components/Dashboard/Dashboard';
import CreateProfile from './Components/create-profile/CreateProfile';
import Profile from './Components/Profile/Profile';
import Posts from './Components/posts/Posts';
import Post from './Components/post/Post';
import EditPost from './Components/posts/EditPost';
import EditProfile from './Components/edit-profile/EditProfile';
import './App.css';




// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));



  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/authlanding" component={AuthLanding} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/profile' component={Profile} />
            {/* <Switch>
              <PrivateRoute path='/dashboard' component={Dashboard} />
            </Switch> */}
            <Switch>
              <PrivateRoute path='/create-profile' component={CreateProfile} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            </Switch>
            <Switch>
              <PrivateRoute path='/feed' component={Posts} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/post" component={Post} />
            </Switch>
            <Switch>
              <PrivateRoute exact path='/editpost/:id' component={EditPost} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/posts" component={Posts} />
            </Switch>
            <Footer className="footer" />
          </div>

        </Router>
      </Provider>

    );
  }
}
export default App;