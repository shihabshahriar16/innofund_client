import React, { useEffect,useState } from 'react';
//import { useSelector } from "react-redux";
import './details.css'
import M from 'materialize-css'
import { Link } from "react-router-dom";
import FAQs from "./FAQ_page";
import Comments from "./Comments";
import axios from "axios";

const ProjectDetails = (props) => {
    const [price,setPrice] = useState(1);
    const project = props.location.state
    useEffect(() => {
        M.Tabs.init(document.getElementById('tabs-swipe-demo'), {})
    }, [])


    const onSupportClick = e => {
        
    axios.post(`/api/project/pledge/${project.id}/${price}`)
                .then(res => {
                    if(res.data.status === 'success'){
                        console.log(res.data.data)
                        window.open(res.data.data);
                    } else {
                        M.toast({ html: "Server Error" })
                        console.log(res.data.message)
                    }
                    
                })
                .catch(err => {
                    M.toast({ html: "Server Error" })
                    console.log(err)
                });
            }
    return (
        <div className='container'>
            <div className='center-align' style={{marginTop: '20px', marginBottom: '20px'}}>
                <span className='name_font center'>{project.project_name}</span>
            </div>
            <div className='row left-align'>
                <div className='col l8'>
                    <div className="video-container">
                        <iframe title="12345" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameBorder="0"
                                allowFullScreen/>
                    </div>
                </div>
                <div className='col l4 right-align'>
                    <div className="progress">
                        <div className="determinate progress_bar"/>
                    </div>
                    <div className='col_create goal_money'>
                        <span>Goal Money : <span style={{color: "#19ca99"}}>{project.goal}</span></span>
                        <span>Pledge Amount : <span style={{color: "#19ca99"}}>{project.pledged}</span></span>
                    </div>
                    <h1 className='name_font' style={{marginBottom: '0px'}}>24</h1>
                    <h1 className='project_attribute' style={{marginTop: '0px', fontSize: '20px'}}>days to go</h1>
                    <div>
                        <button
                            value={project.id}
                            onClick={onSupportClick}
                            style={{marginTop: "20px"}}
                            className="btn-large waves-effect hoverable indigo darken-1">
                            Support This Project
                        </button>
                        <input
                            onChange={(e)=>{setPrice(e.target.value)}}
                            value={price}
                            //error={errors.price}
                            id="amount"
                            type="number"
                            min="1"
                        />
                        <label htmlFor="amount">Amount</label>
                    </div>

                </div>

            </div>
            <div>
                <button style={{margin: "20px"}} className="btn-large waves-effect hoverable indigo darken-1">
                    Bookmark
                </button>
                <button style={{margin: "20px"}} className="btn-large waves-effect hoverable indigo darken-1">
                    Share
                </button>
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
