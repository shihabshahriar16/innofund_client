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
            console.log(action.payload)
            if (index >= 0) {
                console.log('SO PUSH FAQ')
                projects[index].faqs.push(action.payload.newFaq)
            }
        },
        addCommentToParticularProject: (projects, action) => {
            const index = projects.findIndex(project => project.id === action.payload.id)
            if (index >= 0) {
                projects[index].comments.push(action.payload.comment)
            }
        }
    }
})

// selector
export const selectProjectByID = (state, id) => state.projectsInStore.find(project => project.id === id)

// selector
export const {addCampaign, deleteCampaign, addFaqToParticularProject, addCommentToParticularProject} = store.actions
export default store.reducer