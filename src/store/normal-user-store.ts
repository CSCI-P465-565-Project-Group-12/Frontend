import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserState {
    id:string;
    username:string;
    email:string;
    role:string;
}
const normalUserSlice=createSlice({
    name:"normalUser",
    initialState:{
        id:"",
        username:"",
        email:"",
        role:""
    } as IUserState,
    reducers:{
        setUser(state:IUserState,action:PayloadAction<IUserState>){
            state.id=action.payload.id;
            state.username=action.payload.username;
            state.email=action.payload.email;
            state.role=action.payload.role;
        },
        resetUser(state:IUserState){
            state.id="";
            state.username="";
            state.email="";
            state.role="";
        }
    }
});
export const normalUserActions = normalUserSlice.actions;
export default normalUserSlice;