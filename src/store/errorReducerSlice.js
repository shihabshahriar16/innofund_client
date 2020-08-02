import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'error',
    initialState: {},
    reducers: {
        getErrors: (state, action) => {
            state = action.payload
        }
    }
})

export const {getErrors} = slice.actions
export default slice.reducer