import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector } from "react-redux";
import { loadCampaign, deleteCampaign } from "../../store/campaignFormSlice";
import { Link } from "react-router-dom";
import router from "../../routing/routing_variables";
import img1 from "../../images/logo.png";
import Card from "../Card/CardUI";


const ProjectShowCasing = () => {
    const dispatch = useDispatch()
    //const [projects,setProjects]=useState(useSelector(state => state.projectsInStore))
    let projects = useSelector(state => state.projectsInStore)
    // console.log(projects);

    const handleDelete = (id) => {
        dispatch(deleteCampaign(id))
    }
    return (
        <div>
            {projects.map(project => {
                // return <div key={project.id}>
                //     <div className="row">
                //         <div className="col s12 m7">
                //             <div className="card">
                //                 <div className="card-image">
                //                     <img src="../../images/headerimg2.jpg" alt='cardimg'/>
                //                         <span className="card-title">{project.project_name} </span>
                //                 </div>
                //                 <div className="card-content">
                //                         <p>{project.project_description}</p>
                //                 </div>
                //                     <div>
                //                         <div className="card-action">
                //
                //                                 <button className='btn-small' onClick={() => handleDelete(project.id)}>Delete</button>
                //                                 <Link to={{
                //                                     pathname: router.PROJECT_DETAILS,
                //                                     state: project
                //                                 }}>
                //                                     <button className='btn-large'>Details</button>
                //                                 </Link>
                //                         </div>
                //                     </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                return(
                    <div className="col-md-6">
                        <Card project ={project} imgsrc={img1} title={project.project_name} body={project.project_description}/>
                    </div>
                )
            })}
        </div>
    );
};

export default ProjectShowCasing;
