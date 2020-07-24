import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import campaignReducer from "../store/campaignFormInfo";
export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    projectsInStore:  campaignReducer
});