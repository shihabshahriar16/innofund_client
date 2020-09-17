import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
//import qs from 'querystring';

const store = createSlice({
  name: 'myProfile',
  initialState: {
    name: '',
    email: '',
    organization: '',
    position: '',
  },
  reducers: {
    loadMyProfile: (myProfile, action) => {
      const { name, email, organization, position } = action.payload;
      myProfile.name = name;
      myProfile.email = email;
      myProfile.organization = organization;
      myProfile.position = position;
    },
  },
});

export const loadMyProfile_Action = () => (dispatch) => {
  axios
    .get('/api/profile/me')
    .then((res) => dispatch(loadMyProfile(res.data)))
    .catch((error) => {
      console.log(error);
    });
};

export const { loadMyProfile } = store.actions;
export default store.reducer;
