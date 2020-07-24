import {configureStore} from "@reduxjs/toolkit";
import campaignReducer from "./campaignFormInfo"

export default configureStore({
    reducer : {
       projectsInStore:  campaignReducer
    }
})