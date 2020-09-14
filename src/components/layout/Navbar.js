import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from 'styled-components';
import logo from '../../images/logo.png';
import router from "../../routing/routing_variables";
import { logoutUser } from "../../store/authenticationSlice";
const LinkStyled = styled(Link)`
    color: black;
	:hover {
        background-color: #3949ab;
		color: white;
	}
`
const LinkBrand = styled(Link)`
    height: 64px;
	:hover {
        background-color: white;
	}
`
class Navbar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.history.push("/");
        this.props.logoutUser();
    };
    render() {
        return (
            <header className="no-padding">
                <ul className="sidenav" id="mobile-demo">
                    <li><LinkBrand to="/" ><img style={{ height: "60px" }} src={logo} alt="INNOFUND" /></LinkBrand></li>
                    <li><LinkStyled to="/about">About Us</LinkStyled></li>
                    <li><LinkStyled to="#">Start a Campaign</LinkStyled></li>
                    <li><Link to="#!" className="sidenav-close"><i className="material-icons">close</i></Link></li>
                </ul>
                <div className="navbar-fixed">
                    <nav style={{ height: "64px" }} className="white z-depth-2">
                        <div className="nav-wrapper">
                            <ul className="left">
                                <li><LinkStyled to="#" style={{ height: "64px" }} data-target="mobile-demo" className="sidenav-trigger">

                                    <i style={{ lineHeight: "64px" }} className="material-icons">menu</i></LinkStyled>
                                </li>

                                <li><LinkBrand to="/" ><img style={{ height: "60px" }} src={logo} alt="INNOFUND" /></LinkBrand></li>
                            </ul>
                            <ul className="right hide-on-med-and-down">
                                <li><LinkStyled to="/about">About Us</LinkStyled></li>
                                <li><LinkStyled to={router.START_A_CAMPAIGN}>Start a Campaign</LinkStyled></li>
                                {this.props.auth.isAuthenticated ? <li>
                                    <b style={{ textAlign: "center", fontSize: "150%", textJustify: "center" }}>
                                        {this.props.auth.user.name.charAt(0).toUpperCase()}
                                    </b>
                                </li> : null}
                                {this.props.auth.isAuthenticated ? null :
                                    <Link to="/register"
                                        style={{ margin: "10px", width: "140px", borderRadius: "36px", letterSpacing: "1.5px" }}
                                        className="btn waves-effect waves-light hoverable indigo darken-1">
                                        Register
                                    </Link>}
                                {this.props.auth.isAuthenticated ? null :
                                    <Link to="/login"
                                        style={{ margin: "10px", width: "140px", borderRadius: "36px", letterSpacing: "1.5px" }}
                                        className="btn waves-effect hoverable indigo darken-1">
                                        Log In
                                    </Link>}
                                {this.props.auth.isAuthenticated ?
                                    <button
                                        onClick={this.onLogoutClick}
                                        style={{ margin: "10px", width: "140px", borderRadius: "36px", letterSpacing: "1.5px" }}
                                        className="btn waves-effect hoverable indigo darken-1">
                                        Logout
                                    </button> : null
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps,{logoutUser}
)(Navbar);