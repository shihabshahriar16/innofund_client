import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {logoutUser} from "./store/authenticationSlice";
import {Provider} from "react-redux";
import store from "./store/configureStore";
import axios from "axios";
import {createBrowserHistory} from "history";
import "./App.css";

import PrivateRoute from "./components/private-route/PrivateRoute";

import Landing from "./components/landing/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import VerifyEmail from "./components/verifyEmail/VerifyEmail";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ForgotPass from "./components/forgotPass/ForgotPass";
import ChangePass from "./components/forgotPass/ChangePass";
import Dashboard from "./components/dashboard/Dashboard";
import CampaignForm from "./components/campaign_form/campaign_form";
import router from "./routing/routing_variables";
import {setCurrentUser} from "./store/authenticationSlice";

import MyProjects from './components/dashboard/MyProjects';
import ProjectsBacked from './components/dashboard/ProjectsBacked.js';
import Settings from './components/dashboard/Settings'
import Inbox from './components/dashboard/Inbox';
import Bookmarks from './components/dashboard/Bookmarks';
import ProjectDetails from "./components/ProjectShowCasing/ProjectDetails";

axios.defaults.baseURL = "https://innofund-server.herokuapp.com"
//axios.defaults.baseURL = "http://localhost:5000";
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

const history = createBrowserHistory();

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <React.Fragment>

                            <Navbar/>
                            <div className="Main">
                                <Route exact path={router.PROJECT_DETAILS} component={ProjectDetails}/>
                                <Route exact path={router.START_A_CAMPAIGN} component={CampaignForm}/>
                                <Route exact path="/" component={Landing}/>
                                <Route exact path={router.REGISTER} component={Register}/>
                                <Route exact path={router.LOGIN} component={Login}/>
                                <Route exact path={router.FORGOT_PASSWORD} component={ForgotPass}/>
                                <Route exact path={router.CHANGE_PASSWORD} component={ChangePass}/>
                                <Route exact path={router.VERIFY_EMAIL} component={VerifyEmail}/>
                                

                                {/* the following will be private routes */}
                                <Route exact path="/dashboard" component={Dashboard}/>
                                <Route exact path="/dashboard/my_projects" component={MyProjects}/>
                                <Route exact path="/dashboard/projects_backed" component={ProjectsBacked}/>
                                <Route exact path="/dashboard/settings" component={Settings}/>
                                <Route exact path="/dashboard/inbox" component={Inbox}/>
                                <Route exact path="/dashboard/bookmarks" component={Bookmarks}/>
                                
                            </div>
                            <Footer/>
                        </React.Fragment>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
