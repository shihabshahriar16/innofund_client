import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

    render() {
        return (
            <div >
                <HeaderImg />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                <Link to="/dashboard_user"
                        //style={{ margin: "10px", width: "140px", borderRadius: "36px", letterSpacing: "1.5px" }}
                        className="btn-large waves-effect hoverable indigo darken-1">
                        Go To Your Dashboard
                    </Link>
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