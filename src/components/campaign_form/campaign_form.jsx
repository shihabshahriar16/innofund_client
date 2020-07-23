import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from '../../images/logo.png';
import styled from 'styled-components';
import CrowdfundSelect from "./crowdfund_select";

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

class CampaignForm extends Component {
    state = {
        projectName: '',
        crowdfundType: ''
    }
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav style={{height: "64px"}} className="white z-depth-2">
                        <div className="nav-wrapper">
                            <ul className="left">
                                <li><LinkBrand to="/" ><img style={{ height: "60px" }} src={logo} alt="INNOFUND" /></LinkBrand></li>
                            </ul>
                            <ul className="right">
                                <li><LinkStyled to="/about">About Us</LinkStyled></li>
                            </ul>
                        </div>
                    </nav>
                </div>  {/*NavBar*/}
                <div className="container">
                    <h3>Home > Start A Project</h3>
                    <CrowdfundSelect project={this.state}/>
                </div>
            </div>
        );
    }
}

export default CampaignForm;