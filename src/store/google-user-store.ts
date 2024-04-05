import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IGoogleUserState{
    name:string;
    email:string;
}

const googleUserSlice=createSlice({
    name:"googleUser",
    initialState:{
        name:"",
        email:""
    } as IGoogleUserState,
    reducers:{
        setGoogleUser(state:IGoogleUserState,action:PayloadAction<IGoogleUserState>){
            state.name=action.payload.name;
            state.email=action.payload.email;
        },resetGoogleUser(state:IGoogleUserState){
            state.name="";
            state.email="";
        }
    }
});
export const googleUserActions = googleUserSlice.actions;
export default googleUserSlice;