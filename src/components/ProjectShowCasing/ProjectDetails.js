import React, {useEffect} from 'react';
import './details.css'
import M from 'materialize-css'
import {Link} from "react-router-dom";
import FAQs from "./FAQ_page";
import Comments from "./Comments";

const ProjectDetails = (props) => {
    const project = props.location.state
    console.log(project)

    useEffect(() => {
        M.Tabs.init(document.getElementById('tabs-swipe-demo'), {})
    }, [])


    return (
        <div className='container'>
            <div className='center-align' style={{marginTop: '20px', marginBottom: '20px'}}>
                <span className='name_font center'>{project.project_name}</span>
            </div>
            <div className='row left-align'>
                <div className='col l8'>
                    <div className="video-container">
                        <iframe src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameBorder="0" allowFullScreen/>
                    </div>
                </div>
                <div className='col l4 right-align'>
                    <div className="progress">
                        <div className="determinate progress_bar"/>
                    </div>
                    <div className='col_create goal_money'>
                        <span>Goal Money : {project.goal_money}</span>
                        <span>Pledge Amount : {project.pledge_amount}</span>
                    </div>
                    <h1 className='name_font' style={{marginBottom: '0px'}}>24</h1>
                    <h1 className='project_attribute' style={{marginTop: '0px', fontSize: '20px'}}>days to go</h1>
                </div>
            </div>

            <div>
                <p className='project_attribute'>Description</p>
                <p className='description'>{project.project_description}</p>
            </div>

            <div>
                <ul id="tabs-swipe-demo" className="tabs" style={{fontWeight: 'bold', fontColor: 'green'}}>
                    <li className="tab col s3"><Link to="#test-swipe-1" className="active">faqs</Link></li>
                    <li className="tab col s3"><Link to="#test-swipe-2">Comments</Link></li>
                </ul>
                <div id="test-swipe-1" className="col s12"><FAQs project={project}/></div>
                <div id="test-swipe-2" className="col s12"><Comments project={project}/></div>

            </div>
            <div style={{marginBottom: '30px'}}/>
        </div>

    );
};

export default ProjectDetails;
