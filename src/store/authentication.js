import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import qs from "querystring";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {getErrors} from "./errorReducer";

const isEmpty = require('is-empty');

const store = createSlice({
    name: 'authentication',
    initialState: {
        isAuthenticated: false,
        user: {},
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.isAuthenticated = !isEmpty(action.payload)
            state.user = action.payload
        }
    }
})

// Register User
export const registerUser = (userData, history) => (dispatch) => {
    console.log(userData);
    axios
        .post("/api/register", qs.stringify(userData))
        .then((res) => {
            console.log(res.data);
            history.push("/verifyemail", userData);
        }) // re-direct to email verification on successful register
        .catch((err) => {
            console.log(err);
            // dispatch({
            //     type: GET_ERRORS,
            //     payload: err.response.data,
            // });
            dispatch(getErrors(err.response.data));
        });
};

// Login - get user token
export const loginUser = (userData, history) => (dispatch) => {
    axios
        .post("/api/login", qs.stringify(userData))
        .then((res) => {
            // Save to localStorage// Set token to localStorage
            const {token} = res.data;
            // Decode token to get user data
            const decoded = jwt_decode(token);
            if (decoded.emailVerify === false) {
                history.push("/verifyemail", decoded);
            } else {
                localStorage.setItem("jwtToken", token);
                // Set token to Auth header
                setAuthToken(token);
                // Set current user
                dispatch(setCurrentUser(decoded));
            }
        })
        .catch((err) =>
            // dispatch({
            //     type: GET_ERRORS,
            //     payload: err.response.data,
            // })
            dispatch(getErrors(err.response.data))
        );
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false

    dispatch(setCurrentUser({}));
};


export const {setCurrentUser} = store.actions
export default store.reducer