import { Box, Flex, Heading, Wrap,Button } from "@chakra-ui/react"
import { Navbar } from "../components/navbar"
import { RightSidebar } from "../components/right-sidebar"
import { Sidebar } from "../components/Sidebar"
import { unfollowHandler } from "../util-functions/unfollow-handler"
import { followHandler } from "../util-functions/follow-handler"
import { useSelector,useDispatch } from "react-redux"

export const Following=()=>{
    const dispatch=useDispatch()
    const {userFollow}=useSelector(store=>store.posts)
    return(
        <>
        <Navbar/>
        <Wrap mx='12rem'>
        <Flex>
        <Sidebar/>
        <Box border='1px' w='38rem'>
            {userFollow&&userFollow.following.map(data=>
                <Flex m='2rem' align='center' justify='space-between' key={data._id}>
                    <Box>
                    <Heading size='md'>{`${data.firstName} ${data.lastName}`}</Heading>
                    <Box>@{data.username}</Box>
                    </Box>
                    {userFollow.following.some(item=>item._id===data._id)?<Button onClick={()=>unfollowHandler(data._id,dispatch)} size='xs' colorScheme='teal' variant='outline'>Following</Button>:<Button onClick={()=>followHandler(data._id,dispatch)} colorScheme='blue' size='xs'>Follow</Button>}
                </Flex>
                )}
        </Box>
        <RightSidebar/>
        </Flex>
        </Wrap>
        </>
    )
}