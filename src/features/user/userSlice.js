import { createSlice, isPending } from "@reduxjs/toolkit";

const defaultState = {
    user: '',
    authReady: false,
}

const userSlice = createSlice({
    name: "user",
    initialState: defaultState,
    reducers: {
        login: (state, { payload }) => {
            state.user = payload;
        },
        isAuthReady: (state, {payload}) => {
            state.authReady = payload;
        },
        clear: (state) => {
            state.user = '';
        },
    },
})

export const { login, clear, isAuthReady } = userSlice.actions;
export default userSlice.reducer;