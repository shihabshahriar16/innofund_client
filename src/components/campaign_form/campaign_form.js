import React, {Component} from 'react';
import {Link} from "react-router-dom";
//import logo from '../../images/logo.png';
import styled from 'styled-components';
import {addCampaign, ProjectModel, projectTypes} from "../../store/campaignFormInfo";
import M from 'materialize-css'
import {connect} from "react-redux";
import { v4 as uuidv4 } from 'uuid';

// const LinkStyled = styled(Link)`
//     color: black;
// 	:hover {
//         background-color: #3949ab;
// 		color: white;
// 	}
// `
// const LinkBrand = styled(Link)`
//     height: 64px;
// 	:hover {
//         background-color: white;
// 	}
// `

class CampaignForm extends Component {
    state = ProjectModel(uuidv4())

    componentDidMount() {
        M.FormSelect.init(document.getElementById('project_type'))
    }

    render() {
        return (
            <div>
                {/*<div className="navbar-fixed">*/}
                {/*    <nav style={{height: "64px"}} className="white z-depth-2">*/}
                {/*        <div className="nav-wrapper">*/}
                {/*            <ul className="left">*/}
                {/*                <li><LinkBrand to="/"><img style={{height: "60px"}} src={logo}*/}
                {/*                                           alt="INNOFUND"/></LinkBrand></li>*/}
                {/*            </ul>*/}
                {/*            <ul className="right">*/}
                {/*                <li><LinkStyled to="/about">About Us</LinkStyled></li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    </nav>*/}
                {/*</div>*/}
                {/*NavBar*/}
                <div className="container">
                    <h3>Home Start A Project</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type='text' onChange={this.handleChange} value={this.state.project_name}
                                   name={'project_name'} placeholder={'project_name'}/>
                            <input type='text' onChange={this.handleChange} value={this.state.project_type}
                                   name={'project_type'} placeholder={'project_type'}/>
                            <textarea className='materialize-textarea' onChange={this.handleChange}
                                      value={this.state.project_description}
                                      name={'project_description'} placeholder={'project_description'}/>
                            <input type='text' onChange={this.handleChange} value={this.state.start_date}
                                   name={'start_date'}
                                   placeholder={'start_date'}/>
                            <input type='text' style={{marginBottom: 50}} onChange={this.handleChange}
                                   value={this.state.end_date}
                                   name={'end_date'}
                                   placeholder={'end_date'}/>
                            <label className='row s2 teal-text darken-4' style={{fontWeight: "bold", fontSize: 15}}>Goal
                                Money
                                <input className='row s10' style={{marginBottom: 50}} type='number'
                                       onChange={this.handleChange}
                                       value={this.state.goal_money}
                                       name={'goal_money'}
                                       placeholder='goal_money'/>
                            </label>

                            <label className='row s2 teal-text darken-4'
                                   style={{fontWeight: "bold", fontSize: 15}}>Select
                                Project Type
                            </label>


                            <select id='project_type'>
                                <option value={projectTypes.EQUITY_BASED}>{projectTypes.EQUITY_BASED}</option>
                                <option value={projectTypes.REWARD_BASED}>{projectTypes.REWARD_BASED}</option>
                                <option value={projectTypes.PROFIT_SHARING}>{projectTypes.PROFIT_SHARING}</option>
                            </select>


                            <input type='text' style={{marginTop: 20}} onChange={this.handleChange}
                                   value={this.state.project_showcasing_video_url}
                                   name={'project_showcasing_video_url'}
                                   placeholder={'Your Project Video Url'}/>


                        </div>

                        <button style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "3rem"
                        }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable indigo darken-1">Next
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addProject(this.state)
// Routing kore homePage e jabe

    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        // console.log(this.state)
    }
}

const mapDispatchToProps = dispatch => ({
    addProject: (project) => dispatch(addCampaign(project))
})

export default connect(() => ({}), mapDispatchToProps)(CampaignForm);