import { createContext, useContext,useState } from "react";


const PostContext=createContext()

const PostProvider=({children})=>{
    // const [allUsers,setAllUsers]=useState()
    // const [userFollow,setUserFollow]=useState()
    // const [userUnfollow,setUserUnfollow]=useState({})
    // const [loggedInUser,setLoggedInUser]=useState()
    // const [editUserData,setEditUserData]=useState({firstName:"",lastName:"",username:"",bio:"",portfolioURL:""})
    // const [commentDetail,setCommentDetail]=useState()
    // const [userPostId,setUserPostId]=useState("")
    // const [userCommentId,setUserCommentId]=useState()
    return(<PostContext.Provider value={{}}>{children}</PostContext.Provider>)
}

const usePost=()=>useContext(PostContext)

export{PostProvider,usePost}