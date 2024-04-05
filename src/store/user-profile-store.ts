import { createSlice } from "@reduxjs/toolkit";

type UserProfileState = {
    name: string;
    email: string;
    username: string;
    address: string;
    phone: string;
    userId: string;
};
const userProfileSlice=createSlice({
    name: "userProfile",
     initialState: {
        name: "",
        email: "",
        username:"",
        address: "",
        phone: "",
        userId:"",
    } as UserProfileState,
    reducers: {
        setUserProfile: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.address = action.payload.address;
            state.phone = action.payload.phone;
        },
    },
    });

export const userProfileActions = userProfileSlice.actions;
export default userProfileSlice.reducer;