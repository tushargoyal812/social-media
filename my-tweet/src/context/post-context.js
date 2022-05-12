import { createContext, useContext,useState } from "react";


const PostContext=createContext()

const PostProvider=({children})=>{
    const [posts,setPosts]=useState()
    return(<PostContext.Provider value={{posts,setPosts}}>{children}</PostContext.Provider>)
}

const usePost=()=>useContext(PostContext)

export{PostProvider,usePost}