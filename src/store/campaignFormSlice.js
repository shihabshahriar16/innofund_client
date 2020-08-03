import {createSlice} from "@reduxjs/toolkit";
import ProjectModel from "../dataModels/ProjectModel";

const store = createSlice({
    name: 'projectsInStore',
    initialState: [],
    reducers: {
        addCampaign: (projects, action) => {
            //payload will be the project object
            projects.push(action.payload);
        },
        deleteCampaign: ((projects, action) => {
            return projects.filter(project => project.id !== action.payload)
        }),
        addFaqToParticularProject: (projects, action) => {
            const index = projects.findIndex(project => project.id === action.payload.id)
            if (index >= 0) {
                projects[index].faqs.push(action.payload.newFaq)
            }
        }
    }
})

// selector
export const selectProjectByID = (state, id) => state.projectsInStore.find(project => project.id === id)

// selector
export const {addCampaign, deleteCampaign, addFaqToParticularProject} = store.actions
export default store.reducer