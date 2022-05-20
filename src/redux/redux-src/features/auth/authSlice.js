import { createSlice } from "@reduxjs/toolkit";

const initialState={
    auth:localStorage.getItem('user')?true:false
}


export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginButtonPressed:(state,action)=>{
            state.auth=true;
        }
    }
})

export const {loginButtonPressed}=authSlice.actions;

export default authSlice.reducer;