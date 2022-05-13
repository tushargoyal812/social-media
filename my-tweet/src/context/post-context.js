import { createContext, useContext,useState } from "react";


const PostContext=createContext()

const PostProvider=({children})=>{
    const [posts,setPosts]=useState()
    const [newPostData,setNewPostData]=useState()
    const [login,setLogin]=useState({username:"",password:""})
    const [userBookmarks,setUserBookmarks]=useState([])
    const [liked,setLiked]=useState()
    return(<PostContext.Provider value={{posts,setPosts,newPostData,setNewPostData,login,setLogin,userBookmarks,setUserBookmarks,liked,setLiked}}>{children}</PostContext.Provider>)
}

const usePost=()=>useContext(PostContext)

export{PostProvider,usePost}