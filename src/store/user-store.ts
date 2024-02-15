import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";

interface IUserState {
    username:string;
    email:string;
    password:string;
    role:string;
}
const userSlice:Slice=createSlice({
    name:"user",
    initialState:{
        username:"",
        email:"",
        password:"",
        role:""
    } as IUserState,
    reducers:{
        setRegisterionCred(state:IUserState,action:PayloadAction<IUserState>){
            state.username=action.payload.username;
            state.email=action.payload.email;
            state.password=action.payload.password;
            state.role=action.payload.role;
        }
    }
});
export const userActions = userSlice.actions;
export default userSlice;