import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import logoutUser from "../../actions/logoutAction";
import HeaderImg from "../layout/HeaderImg"

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.history.push("/");
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <HeaderImg />
        <div>
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Hello, </b> {user.name.split(" ")[0]}
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