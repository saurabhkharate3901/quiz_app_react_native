import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email : '',
    password : "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signup: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email
            state.password = action.payload.password
        },
        logout: (state) => {
            state.username = '';
        },
    }
})

export const { signup, logout } = authSlice.actions;
export default authSlice.reducer;