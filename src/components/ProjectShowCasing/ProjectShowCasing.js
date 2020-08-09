import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteCampaign} from "../../store/campaignFormSlice";
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
