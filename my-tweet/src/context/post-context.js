import { createContext, useContext,useState } from "react";


const PostContext=createContext()

const PostProvider=({children})=>{
    const [posts,setPosts]=useState([])
    const [newPostData,setNewPostData]=useState()
    const [login,setLogin]=useState({username:"",password:""})
    const [userBookmarks,setUserBookmarks]=useState([])
    const [allUsers,setAllUsers]=useState()
    const [userFollow,setUserFollow]=useState()
    const [userUnfollow,setUserUnfollow]=useState({})
    const [loggedInUser,setLoggedInUser]=useState()
    const [editUserData,setEditUserData]=useState({firstName:"",lastName:"",username:"",bio:"",portfolioURL:""})
    const [commentDetail,setCommentDetail]=useState()
    const [userPostId,setUserPostId]=useState("")
    const [userCommentId,setUserCommentId]=useState()
    return(<PostContext.Provider value={{posts,setPosts,newPostData,setNewPostData,login,setLogin,userBookmarks,setUserBookmarks,allUsers,setAllUsers,userFollow,setUserFollow,userUnfollow,setUserUnfollow,loggedInUser,setLoggedInUser,editUserData,setEditUserData,commentDetail,setCommentDetail,userPostId,setUserPostId,userCommentId,setUserCommentId}}>{children}</PostContext.Provider>)
}

const usePost=()=>useContext(PostContext)

export{PostProvider,usePost}