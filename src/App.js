import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import setCurrentUser from "./actions/setUser";
import logoutUser from "./actions/logoutAction";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
import { createBrowserHistory } from 'history'
import './App.css';

import PrivateRoute from "./components/private-route/PrivateRoute";

import Landing from './components/landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import VerifyEmail from './components/verifyEmail/VerifyEmail';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './components/dashboard/Dashboard';
import ForgotPass from './components/forgotPass/ForgotPass';
import ChangePass from './components/forgotPass/ChangePass';


//axios.defaults.baseURL = "https://innofund.com"
axios.defaults.baseURL = "http://localhost:5000"
// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000;
    // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to home
        window.location.href = "./";
    }
}

const history = createBrowserHistory()

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <React.Fragment>
                            <Navbar />
                            <div className="Main">
                                <Route exact path="/" component={Landing} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/forgotpass" component={ForgotPass} />
                                <Route exact path="/changepass/:token" component={ChangePass} />
                                <Route exact path="/verifyemail" component={VerifyEmail} />
                                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            </div>
                            <Footer />
                        </React.Fragment>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
