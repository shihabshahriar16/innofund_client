import auth from "../store/authenticationSlice";
import errors from "../store/errorReducerSlice";
import projectsInStore from "../store/campaignFormSlice";
import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
    reducer: {auth, errors, projectsInStore}
});