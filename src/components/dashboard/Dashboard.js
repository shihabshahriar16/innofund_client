import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {logoutUser} from "../../store/authenticationSlice";

import M from 'materialize-css';
import MyProjects from "./MyProjects";
import Inbox from "./Inbox";
import ProjectsBacked from "./ProjectsBacked";
import Bookmarks from "./Bookmarks";
import Settings from "./Settings";


//import { Route , Switch} from "react-router-dom";
//import  from 'react-router-dom';

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        //this.props.history.push("/");
        this.props.logoutUser();
    };

    componentDidMount(){
        M.Tabs.init(document.getElementById('tabs-swipe-demo'));
    }

    render() {
        
        //uncomment the following for authorization
       // const {user} = this.props.auth;
        return (
            <div>
                {/* <HeaderImg/> */}
                
            
                <div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <h4>
                                {/* <b>Hello, </b> {user.name.split(" ")[0]} */}
                                <p className="flow-text grey-text text-darken-1">
                                    Hi, You are now a part of our great community<br/><br/>
                                    Search projects or start your own campaign<br/><br/>
                                    Imagine it, Believe in it and Nurture it.
                                </p>

                            </h4>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                onClick={this.onLogoutClick}
                                className="btn btn-large waves-effect waves-light hoverable indigo darken-1"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
                
               
                <div>
                <ul id="tabs-swipe-demo" className="tabs" style={{fontWeight: 'bold', fontColor: 'green'}}>
                    <li className="tab col s3"><Link to="#test-swipe-1" className="active">MyProjects</Link></li>
                    <li className="tab col s3"><Link to="#test-swipe-2">Inbox</Link></li>
                    <li className="tab col s3"><Link to="#test-swipe-3">Projects Backed</Link></li>
                    <li className="tab col s3"><Link to="#test-swipe-4">Bookmarks</Link></li>
                    <li className="tab col s3"><Link to="#test-swipe-5">Settings</Link></li>
                </ul>
                <div id="test-swipe-1" className="col s12"><MyProjects/></div>
                <div id="test-swipe-2" className="col s12"><Inbox/></div>
                <div id="test-swipe-3" className="col s12"><ProjectsBacked/></div>
                <div id="test-swipe-4" className="col s12"><Bookmarks/></div>
                <div id="test-swipe-5" className="col s12"><Settings/></div>


                </div>
                    
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {logoutUser}
)(Dashboard);