import {createSlice} from "@reduxjs/toolkit";

const store = createSlice({
    name: 'projectsInStore',
    initialState: [],
    reducers: {
        addCampaign: (projects, action) => {
            //payload will be the project object
            projects.push(action.payload)
        },
        deleteCampaign: ((projects, action) => {
            return projects.filter(project => project.id !== action.payload)
        }),
    }
})

export const {addCampaign, deleteCampaign} = store.actions
export default store.reducer