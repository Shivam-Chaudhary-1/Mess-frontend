import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem('user') ? localStorage.getItem('user') : null,
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;

            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', action.payload.user);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;

            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        setUser: (state, action) => {
            state.user = {...state.user, ...action.payload},
            localStorage.setItem('user', state.user);
        }
    }
})

export const { login, logout, setUser } = authSlice.actions;

export default authSlice.reducer;