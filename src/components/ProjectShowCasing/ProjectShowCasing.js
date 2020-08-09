import React,{useEffect,useState} from 'react';
import {useDispatch, useSelector } from "react-redux";
import { loadCampaign, deleteCampaign } from "../../store/campaignFormSlice";
import { Link } from "react-router-dom";
import router from "../../routing/routing_variables";


const ProjectShowCasing = () => {
    const dispatch = useDispatch()
    //const [projects,setProjects]=useState(useSelector(state => state.projectsInStore))
    const projects = useSelector(state => state.projectsInStore)
    console.log(projects);
    const handleDelete = (id) => {
        dispatch(deleteCampaign(id))
    }
    useEffect(() => {
        loadCampaign()
    },[])

    return (
        <div>
            {projects.map(project => {
                return <div key={project.id}>
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card">
                                <div className="card-image">
                                    <img src="../../images/headerimg2.jpg"/>
                                        <span className="card-title">{project.project_name} </span>
                                </div>
                                <div className="card-content">
                                        <p>{project.project_description}</p>
                                </div>
                                    <div>
                                        <div className="card-action">
                                            <a href="#">
                                                <button className='btn-small' onClick={() => handleDelete(project.id)}>Delete</button>
                                                <Link to={{
                                                    pathname: router.PROJECT_DETAILS,
                                                    state: project
                                                }}>
                                                    <button className='btn-large'>Details</button>
                                                </Link>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
};

export default ProjectShowCasing;
