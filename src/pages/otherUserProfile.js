import { Avatar, Box, Flex, Heading, Link, Wrap,Button } from "@chakra-ui/react"
import { useParams,NavLink } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { Sidebar } from "../components/Sidebar"
import { Navbar } from "../components/navbar"
import { RightSidebar } from "../components/right-sidebar"
import { followHandler } from "../util-functions/follow-handler"
import { unfollowHandler } from "../util-functions/unfollow-handler"

export const OtherUserProfile=()=>{
    const {userFollow}=useSelector(store=>store.posts)
    const dispatch=useDispatch()
    // const dispatch=useDispatch()
    // const getAllUser=async()=>{
    //     try {
    //         const response=await axios.get('/api/users')
    //         dispatch(allUsersHandler(response.data.users))
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(()=>{
    //     getAllUser()
    // },[])
    const {username}=useParams()
    const {allUsers}=useSelector(store=>store.posts)

    let profileUser=allUsers.find(user=>user.username===username)
    console.log(profileUser);
    return(
        <>
        <Navbar/>
        <Wrap mx='12rem'>
        <Flex>
        <Sidebar/>
        <Box border='1px' w='35rem'>
        <Flex justify='space-evenly' align='center'>
            <Box>
            <Avatar size='2xl' name={profileUser.username} src='https://bit.ly/sage-adebayo' />
            </Box>
            <Box>
            <Heading>{`${profileUser.firstName} ${profileUser.lastName}`}</Heading>
            <Box>@{profileUser.username}</Box>
            <Box>{profileUser.bio}</Box>
            <Link color='blueviolet' href={profileUser.portfolioURL}>{profileUser.portfolioURL}</Link>
            <Flex gap='1'>
            <Flex gap='1'>
            {userFollow?<Box>{profileUser.following.length}</Box>:<Box>0</Box>}<NavLink to='/following'>Following</NavLink>
            </Flex>
            <Flex gap='1'>
            {userFollow?<Box>{profileUser.followers.length}</Box>:<Box>0</Box>}<NavLink to='/followers'>Followers</NavLink>
            </Flex>
            </Flex>
            </Box>
            <Box>
            {userFollow&&userFollow.following.some(item=>item._id===profileUser._id)?<Button onClick={()=>unfollowHandler(profileUser._id,dispatch)} size='xs' colorScheme='teal' variant='outline'>Following</Button>:<Button onClick={()=>followHandler(profileUser._id,dispatch)} colorScheme='blue' size='xs'>Follow</Button>}
            </Box>
        </Flex>
        </Box>
        <RightSidebar/>
        </Flex>
        </Wrap>
        </>
    )
}