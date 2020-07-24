import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderImg from "../layout/HeaderImg"

class About extends Component {
    render() {
        return (
            <div>
                <HeaderImg/>
                <div className="container">
                    <div className="section">
                    <h4 className="center-align">
                    About<b> INNOFUND</b>
                </h4>
                <blockquote>
                <p>
                    Bla Bla Bla...
                </p>
                </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({

});

export default connect(
    mapStateToProps
)(About);
