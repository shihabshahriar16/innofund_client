import React, { Component } from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderImg from "../layout/HeaderImg"
import MyProjects from "./MyProjects"
import Inbox from "./Inbox"
import ProjectsBacked from "./ProjectsBacked"
import Bookmarks from "./Bookmarks"
import Settings from "./Settings"
import M from "materialize-css"

class DashboardUser extends Component {
    componentDidMount() {
        M.Tabs.init(document.querySelector(".tabs"));
        window.scrollTo(0, 0)
        // If logged in and user navigates to Landing page, should redirect them to dashboard
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/");
        }
    }
    render() {
        return (
            <div>
                {/* <HeaderImg /> */}
                <div className="row">
                    <div className="col s12">
                        <ul id="tabs-swipe-demo" className="tabs" style={{fontWeight: 'bold', fontColor: 'green'}}>
                            <li className="tab col s3"><a href="#test1">My projects</a></li>
                            <li className="tab col s3"><a href="#test2">Inbox</a></li>
                            <li className="tab col s3"><a href="#test3">Projects backed</a></li>
                            <li className="tab col s3"><a href="#test4">Bookmarks</a></li>
                            <li className="tab col s3"><a href="#test4">Settings</a></li>
                        </ul>
                    </div>
                    <div id="test1" className="col s12"><MyProjects/></div>
                    <div id="test2" className="col s12"><Inbox/></div>
                    <div id="test3" className="col s12"><ProjectsBacked/></div>
                    <div id="test4" className="col s12"><Bookmarks/></div>
                </div>
            </div>
        );
    }
}

DashboardUser.propTypes = {
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps
)(DashboardUser);