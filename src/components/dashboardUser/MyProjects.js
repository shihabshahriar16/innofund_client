import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMyProjects } from '../../store/myProjectsSlice';
import { Link } from 'react-router-dom';
import router from '../../routing/routing_variables';
import cardimg from '../../images/cardimg.jpg';

const MyProjects = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMyProjects());
  }, [dispatch]);
  let projects = useSelector((state) => state.myProjects);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {projects.map((project) => {
        return (
          <div key={project.id} style={{ margin: '20px' }}>
            <div className='card small'>
              <div className='card-image'>
                <img
                  style={{ width: '400px', height: '300px' }}
                  src={cardimg}
                  alt='img1'
                />
              </div>
              <span className='card-title'>{project.project_name}</span>
              <div className='card-content'>
                <p>{project.project_description}</p>
              </div>
              <div className='card-action'>
                <Link
                  to={{
                    pathname: router.PROJECT_DETAILS,
                    state: project,
                  }}
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyProjects;
