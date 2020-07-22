import React, {Component} from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import HeaderImg from "../layout/HeaderImg"

class Landing extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        // If logged in and user navigates to Landing page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    render() {
        return (
            <div>
                <HeaderImg/>
                <div>
                    <div className="center-align container">
                        <h4>
                            Welcome to <b>Innofund</b>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps
)(Landing);