import {createSlice} from "@reduxjs/toolkit";
//import ProjectModel from "../dataModels/ProjectModel";
import axios from "axios";
import qs from "querystring";

const store = createSlice({
    name: 'projectsInStore',
    initialState: [],
    reducers: {
        loadAll: (projects, action) => {
            action.payload.forEach(project => {
                if (!projects.some(pro =>
                    pro.id === project.id)) {
                    project.faqs = []
                    project.comments = []
                    projects.push(project)
                }
            });
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
        },
        addFaqQuestionAnswer: (projects, action) => {
            const {project_id, question, answer} = action.payload
            let ques_found = false
            projects.forEach(project => {
                if (project.id === project_id) {
                    project.faqs.forEach(faq => {
                        if (faq.question === question) {
                            ques_found = true
                            faq.answers.push(answer)
                        }
                    })
                }
            })
        },
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

    axios
        .get(
            "api/project/faq"
        )
        .then(res => {
            console.log(res.data)
            res.data.forEach(row => {
                const row_obj = {
                    project_id: row.project_id,
                    question: row.question,
                    answer: row.answer
                }
                dispatch(addFaqQuestionAnswer({row_obj}))
            })

        })
        .catch(error => {
            console.log(error)
        })

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


export const createNewFaq = (newFaq) => dispatch => {
    console.log(newFaq)
    axios
        .post("/api/project/faq", qs.stringify(newFaq))
        .then((res) => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
}
// selector
export const selectProjectByID = (state, id) => state.projectsInStore.find(project => project.id === id)

// selector
export const {loadAll, addCampaign, addFaqQuestionAnswer, deleteCampaign, addFaqToParticularProject, addCommentToParticularProject, addWholeFaqList} = store.actions
export default store.reducer