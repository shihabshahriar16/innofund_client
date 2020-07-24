import {createSlice} from "@reduxjs/toolkit";

export const projectTypes = {
    EQUITY_BASED: 'Equity-Based', REWARD_BASED: 'Reward-Based', PROFIT_SHARING: 'Profit Sharing'
}

export function ProjectModel() {
    return {
        id: '',
        project_name: '',
        project_type: '',
        project_description: '',
        start_date: '',
        end_date: '',
        goal_money: 0,
        pledge_amount: 0,
        number_of_investors: 0,
        project_status_id: '',
    }
}

const store = createSlice({
    name: 'startCampaignInfo',
    initialState: [],
    reducers: {
        addCampaign: (projects, action) => {
            //payload will be the project object
            console.log(action.payload)
            console.log(action)
            projects.push(
                {[action.payload.id]: action.payload}
            )
        },
        deleteCampaign: ((projects, action) => {
            projects = projects.filter(project => project.id !== action.payload.id)
        })
    }
})
export const selectProject = state => state.projectsInStore

export const {addCampaign, deleteCampaign} = store.actions
export default store.reducer