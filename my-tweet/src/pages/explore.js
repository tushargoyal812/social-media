import { Box,Wrap,Flex } from "@chakra-ui/react"
import { useEffect } from "react"
import { PostCard } from "../components/postCard"
import { Navbar } from "../components/navbar"
import { Sidebar } from "../components/Sidebar"
import { RightSidebar } from "../components/right-sidebar"
import { PostSection } from "../components/Post-section"
import { postHandler } from "../redux/redux-src/features/post/postSlice"
import { useSelector,useDispatch } from "react-redux"
import axios from "axios"

export const Explore=()=>{
    const dispatch=useDispatch()
    const {posts}=useSelector(store=>store.posts)
    const getPostsFromDb= async ()=>{
        try {
            const reponse=await axios.get('/api/posts')
            dispatch(postHandler(reponse.data.posts))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getPostsFromDb()
    },[])
    return(
        <>
        <Navbar/>
        <Wrap mx='12rem'>
        <Flex>
        <Sidebar/>
        <Box w='35rem' border='2px' borderColor='gray.200'>
            {posts.map(post=><PostCard post={post} />)}
        </Box>
        <RightSidebar/>
        </Flex>
        </Wrap>
        </>
    )
}