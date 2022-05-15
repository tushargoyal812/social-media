import { Box, Flex, Heading, Wrap,Button } from "@chakra-ui/react"
import { Navbar } from "../components/navbar"
import { RightSidebar } from "../components/right-sidebar"
import { Sidebar } from "../components/Sidebar"
import { usePost } from "../context/post-context"
import { unfollowHandler } from "../util-functions/unfollow-handler"
import { followHandler } from "../util-functions/follow-handler"

export const Following=()=>{
    const {userFollow,setUserFollow}=usePost()
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
                    {userFollow.following.some(item=>item._id===data._id)?<Button onClick={()=>unfollowHandler(data._id,setUserFollow)} size='xs' colorScheme='teal' variant='outline'>Following</Button>:<Button onClick={()=>followHandler(data._id,setUserFollow)} colorScheme='blue' size='xs'>Follow</Button>}
                </Flex>
                )}
        </Box>
        <RightSidebar/>
        </Flex>
        </Wrap>
        </>
    )
}