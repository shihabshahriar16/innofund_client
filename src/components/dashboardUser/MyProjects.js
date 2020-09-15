import React, { Component,useEffect } from 'react';
import { connect,useDispatch,useSelector} from "react-redux";
import PropTypes from 'prop-types';
import { loadMyProjects } from '../../store/myProjectsSlice';

const MyProjects = (props) => {
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(loadMyProjects());
    },[dispatch])
    let projects = useSelector(state => state.myProjects)
    return (
        <div>
            Hello world
        </div>
    )
}

// class MyProjects extends Component {
//     componentDidMount(){
//         this.props.loadMyProjects();
//     }
//     render() {
//         return (
//             <div>
//                 <h5>A list of my projects</h5>
                
//             </div>
//         )
//     }
    
// }

// const mapStateToProps = state =>({
//     myProjects:state.myProjects
// })
// MyProjects.propTypes = {
//     loadMyProjects:PropTypes.func.isRequired
// }

export default MyProjects;
//connect(mapStateToProps,{loadMyProjects})(MyProjects);
