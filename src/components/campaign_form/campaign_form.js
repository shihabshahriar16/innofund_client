import React, {useEffect, useState} from 'react';
import M from 'materialize-css'
import {useDispatch} from "react-redux";
//import {v4 as uuidV4} from 'uuid';
import ProjectModel from "../../dataModels/ProjectModel";
import {projectTypes} from "../../dataModels/ProjectTypes";
import produce from 'immer'
import {createCampaign} from "../../store/campaignFormSlice";
import {Link} from "react-router-dom";
import router from "../../routing/routing_variables";
import CampaignForm2 from "./campaign_form_2";

const CampaignForm = () => {
    const [project, setProject] = useState(ProjectModel())
    const dispatch = useDispatch()

    useEffect(() => {
        M.FormSelect.init(document.getElementById('project_type'))
    }, [])

    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(project)
        dispatch(createCampaign(project));
        console.log('Now Im here')
        setSubmitted(true)
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setProject(produce(project, draft => {
            draft[name] = value
        }))
        // console.log(this.state)
    }

    return (
        submitted ? <CampaignForm2 project={project}/> : <div>
            <div className="container">
                <h3>Home Start A Project</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type='text' onChange={handleChange} value={project.project_name}
                               name={'project_name'} placeholder={'project_name'}/>
                        <input type='text' onChange={handleChange} value={project.project_type}
                               name={'project_type'} placeholder={'project_type'}/>
                        <textarea className='materialize-textarea' onChange={handleChange}
                                  value={project.project_description}
                                  name={'project_description'} placeholder={'project_description'}/>
                        <input type='text' onChange={handleChange} value={project.start_date}
                               name={'start_date'}
                               placeholder={'start_date'}/>
                        <input type='text' style={{marginBottom: 50}} onChange={handleChange}
                               value={project.end_date}
                               name={'end_date'}
                               placeholder={'end_date'}/>
                        <label className='row s2 teal-text darken-4' style={{fontWeight: "bold", fontSize: 15}}>Goal
                            Money
                            <input className='row s10' style={{marginBottom: 50}} type='number'
                                   onChange={handleChange}
                                   value={project.goal_money}
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


                        <input type='text' style={{marginTop: 20}} onChange={handleChange}
                               value={project.project_showcasing_video_url}
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

export default CampaignForm;