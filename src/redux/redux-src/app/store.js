import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import PostReducer from '../features/post/postSlice'

export const store=configureStore({
    reducer:{auth:authReducer,posts:PostReducer,
        // newPostData:PostReducer,
        userBookmarks:PostReducer,
        allUsers:PostReducer,
        userFollow:PostReducer,
        loggedInUser:PostReducer,
        editUserData:PostReducer
    },
})