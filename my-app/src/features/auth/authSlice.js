import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: '',
        login: '',
        email: '',
        isAuthenticated: false,
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setLogin: (state, action) => {
            state.login = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        authenticate: (state) => {
            state.isAuthenticated = true;
        },
    },
});

export const { setName, setLogin, setEmail, authenticate } = authSlice.actions;

export default authSlice.reducer;
