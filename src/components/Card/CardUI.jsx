import React from 'react'
import './Card-Style.css';
import {Link} from "react-router-dom";
import router from "../../routing/routing_variables";


const Card = props =>{
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt='project photo' className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.body}</p>
                {/*<a href="#" className="btn btn-outline-success">See more</a>*/}
                <Link to={{
                    pathname: router.PROJECT_DETAILS,
                    state: props.project
                }}>
                    <button className="btn btn-outline-success">See More</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;