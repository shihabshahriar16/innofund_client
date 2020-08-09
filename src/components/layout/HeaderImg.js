import React, { Component } from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import headerimg from '../../images/headerimg3.jpg'
class HeaderImg extends Component {
    render() {
        return (
            <div>
                <img style={{ width: "100vw", height:"700px"}} src={headerimg} alt="headerimg" />
            </div>
            
        );
    }
}
HeaderImg.propTypes = {
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps,
)(HeaderImg);