import {createSlice} from "@reduxjs/toolkit";
//import ProjectModel from "../dataModels/ProjectModel";
import axios from "axios";

const store = createSlice({
    name: 'projectsInStore',
    initialState: [],
    reducers: {
        loadAll: (projects, action) => {
            projects=action.payload;
        },
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
        addWholeFaqList: (projects, action) => {
            const index = projects.findIndex(project => project.id === action.payload.id)
            const faqList = action.payload.faqs
            if (index >= 0) {
                projects[index].faqs = faqList
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

export const loadCampaign = () => (dispatch) => {
    axios
    .get("/api/project")
    .then(res => {
        console.log(res.data);
        dispatch(loadAll(res.data))
    })
    .catch(err => {
        console.log(err)
    });
}

// selector
export const selectProjectByID = (state, id) => state.projectsInStore.find(project => project.id === id)

// selector
export const {loadAll,addCampaign, deleteCampaign, addFaqToParticularProject, addCommentToParticularProject, addWholeFaqList} = store.actions
export default store.reducer