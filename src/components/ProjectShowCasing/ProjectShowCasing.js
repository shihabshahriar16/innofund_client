import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteCampaign} from "../../store/campaignFormSlice";
import {Link} from "react-router-dom";
import router from "../../routing/routing_variables";
import Card from "../../Cards/CardUI";
import img1 from "../../images/logo.png";

const ProjectShowCasing = () => {
    const dispatch = useDispatch()
    //const [projects,setProjects]=useState(useSelector(state => state.projectsInStore))
    let projects = useSelector(state => state.projectsInStore)
    // console.log(projects);

    const handleDelete = (id) => {
        dispatch(deleteCampaign(id))
    }
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                {projects.map(project => {
                    /*return <div key={project.id}>
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
                    </div>*/

                    return(
                        <div className="col-md-6">
                            <Card project ={project} imgsrc={img1} title={project.project_name} body={project.project_description}/>
                        </div>
                    )
            })}
            </div>
        </div>
    );
};

export default ProjectShowCasing;
