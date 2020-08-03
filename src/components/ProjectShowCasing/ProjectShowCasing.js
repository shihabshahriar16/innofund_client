import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteCampaign} from "../../store/campaignFormSlice";
import {Link} from "react-router-dom";
import router from "../../routing/routing_variables";

const ProjectShowCasing = () => {
    const projects = useSelector(state => state.projectsInStore)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteCampaign(id))
    }

    return (
        <div>
            {projects.map(project => {
                return <div key={project.id}>
                    <div>
                        {project.project_name} {project.project_description} {project.goal_money}
                    </div>
                    <button className='btn-small' onClick={() => handleDelete(project.id)}>Delete</button>
                    <Link to={{
                        pathname: router.PROJECT_DETAILS,
                        state: project
                    }}>
                        <button className='btn-large'>Details</button>
                    </Link>
                </div>
            })}
        </div>
    );
};

export default ProjectShowCasing;
