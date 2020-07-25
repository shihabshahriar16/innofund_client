import {createSlice} from "@reduxjs/toolkit";

const store = createSlice({
    name: 'authentication',
    initialState: {
        isAuthenticated: false,
        user: {},
    },
    reducers: {
        registerUser: (state, action) => {

        }
    }
})

export const {} = store.actions
export default store.reducer