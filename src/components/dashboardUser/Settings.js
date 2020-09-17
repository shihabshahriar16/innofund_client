//import { immerable } from 'immer';
import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import produce from 'immer';
import { loadMyProfile_Action } from '../../store/profileSlice';
const Settings = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile);
  useEffect(() => {
    console.log('get user profile here ');
    dispatch(loadMyProfile_Action());
  }, [dispatch]);

  return (
    <Fragment>
      <div className='row'>
        <div className='input-field col s6'>
          <input
            value={myProfile.name}
            id='name'
            type='text'
            className='validate'
          />
          <br/>
          <label class='active' for='name'>
            Name
          </label>
        </div>
        <div className='input-field col s6'>
          <input
            value={myProfile.email}
            id='email'
            type='text'
            className='validate'
          />
          <br/>
          <label class='active' for='email'>
            Email
          </label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s6'>
          <input
            value={myProfile.organization}
            id='organization'
            type='text'
            className='validate'
          />
          <br/>
          <label class='active' for='organization'>
            Organization
          </label>
        </div>
        <div className='input-field col s6'>
          <input
            value={myProfile.position}
            id='email'
            type='text'
            className='validate'
          />
          <br/>
          <label class='active' for='position'>
            Position
          </label>
        </div>
      </div>
    </Fragment>
  );
};

export default Settings;
