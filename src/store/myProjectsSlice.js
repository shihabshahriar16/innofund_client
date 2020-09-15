import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const store = createSlice({
  name: 'myProjects',
  initialState: [],
  reducers: {
    loadAll: (projects, action) => {
      action.payload.forEach((project) => {
        if (!projects.some((pro) => pro.id === project.id)) {
          projects.push(project);
        }
      });
    },
  },
});

export const loadMyProjects = () => (dispatch) => {
  console.log('inside axios');

  axios
    .get('/api/project/personal/all')
    .then((res) => {
      console.log(res.data);
      dispatch(loadAll(res.data));
    })
    .catch((err) => console.log(err.message));
  //   try {
  //     const res = await axios.get('/api/project/personal/all');
  //     dispatch(loadAll(res.data))
  // } catch (error) {
  //     console.log(error)
  // }
};

export default store.reducer;
export const { loadAll } = store.actions;
