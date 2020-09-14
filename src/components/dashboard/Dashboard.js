import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import { logoutUser } from "../../store/authenticationSlice";
import HeaderImg from "../layout/HeaderImg"
import ProjectShowCasing from "../ProjectShowCasing/ProjectShowCasing";

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
            <div >
                <HeaderImg />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                    <p className="flow-text grey-text text-darken-1">
                        Hi, You are now a part of our great community<br /><br />
                        Search projects or start your own campaign<br /><br />
                        Imagine it, Believe in it and Nurture it.
                    </p>
                    <ProjectShowCasing />
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
    { logoutUser }
)(Dashboard);