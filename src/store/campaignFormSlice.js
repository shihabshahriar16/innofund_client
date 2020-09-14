import { createSlice } from "@reduxjs/toolkit";
//import ProjectModel from "../dataModels/ProjectModel";
import axios from "axios";
import qs from "querystring";

const store = createSlice({
    name: 'projectsInStore',
    initialState: [],
    reducers: {
        loadAll: (projects, action) => {
            action.payload.map(project => projects.push(project));
        },
        addCampaign: (projects, action) => {
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

export const loadCampaign = () => dispatch => {
    console.log('inside axios')
    axios
        .get("/api/project")
        .then(res => {
            console.log(res.data);
            dispatch(loadAll(res.data))
        })
        .catch(err => {
            console.log(err.message)
        });
}
export const createCampaign = (newProject) => dispatch => {
    console.log(newProject);
    axios
    .post("/api/project/create", qs.stringify(newProject))
    .then((res) => {
        console.log(res.data);
        dispatch(addCampaign(newProject));
    }) 
    .catch((err) => {
        console.log(err);
    });
}
// selector
export const selectProjectByID = (state, id) => state.projectsInStore.find(project => project.id === id)

// selector
export const { loadAll, addCampaign, deleteCampaign, addFaqToParticularProject, addCommentToParticularProject, addWholeFaqList } = store.actions
export default store.reducer