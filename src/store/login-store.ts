import { createSlice } from "@reduxjs/toolkit";


interface ILogin {
    isLoggedin: boolean;
}
const initialState: ILogin = {
    isLoggedin: false,
};
const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        login(state) {
            state.isLoggedin=true
        },
        logout(state) {
            state.isLoggedin=false
        }
    },
    });

export const loginActions = loginSlice.actions;
export default loginSlice;