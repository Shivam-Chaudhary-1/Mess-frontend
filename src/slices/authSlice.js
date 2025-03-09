import { createSlice } from "@reduxjs/toolkit";

// Safely retrieve and parse user data from localStorage
const getUserFromLocalStorage = () => {
    try {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        localStorage.removeItem('user'); // Remove corrupted data
        return null;
    }
};

const initialState = {
    user: getUserFromLocalStorage(),
    token: localStorage.getItem('token') || null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;

            if (action.payload.token) localStorage.setItem('token', action.payload.token);
            if (action.payload.user) {
                try {
                    localStorage.setItem('user', JSON.stringify(action.payload.user)); // Properly stringify
                } catch (error) {
                    console.error("Error saving user to localStorage:", error);
                }
            }
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        setUser: (state, action) => {
            state.user = { ...state.user, ...action.payload };
            try {
                localStorage.setItem('user', JSON.stringify(state.user));
            } catch (error) {
                console.error("Error updating user in localStorage:", error);
            }
        }
    }
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
