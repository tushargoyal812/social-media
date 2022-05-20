import { createSlice } from "@reduxjs/toolkit";

const initialState={
    posts:[],
    newPostData:"",
    userBookmarks:[],
    allUsers:[],
    userFollow:"",
    loggedInUser:"",
    editUserData:{},
    commentDetail:"",
    userPostId:"",
    userCommentId:""
}


const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{
        postHandler:(state,action)=>{
            state.posts=action.payload
        },
        newPostHandler:(state,action)=>{
            state.newPostData=action.payload
        },
        bookmarkHandler:(state,action)=>{
            state.userBookmarks=action.payload
        },
        allUsersHandler:(state,action)=>{
            state.allUsers=action.payload
        },
        userFollowHandler:(state,action)=>{
            state.userFollow=action.payload
        },
        loggedInUserHandler:(state,action)=>{
            state.loggedInUser=action.payload
        },
        editUserDataHandler:(state,action)=>{
            state.editUserData=action.payload
        },
        commentDetailHandler:(state,action)=>{
            state.commentDetail=action.payload
        },
        postIdHandler:(state,action)=>{
            state.userPostId=action.payload
        },
        commentIdHandler:(state,action)=>{
            state.userCommentId=action.payload
        }
    }
})

export const {postHandler,newPostHandler,bookmarkHandler,allUsersHandler,userFollowHandler,loggedInUserHandler,editUserDataHandler,commentDetailHandler,postIdHandler,commentIdHandler}=postSlice.actions

export default postSlice.reducer