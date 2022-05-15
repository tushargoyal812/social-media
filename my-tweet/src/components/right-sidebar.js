import { Box, Button, Flex, Heading, useDisclosure, Wrap } from "@chakra-ui/react"
import axios from "axios"
import { useEffect } from "react"
import { usePost } from "../context/post-context"
import { followHandler } from "../util-functions/follow-handler"
import { unfollowHandler } from "../util-functions/unfollow-handler"
import { UnfollowModal } from "./unfollow-modal"

export const RightSidebar=()=>{
    const {allUsers,setAllUsers,userFollow,setUserFollow,userUnfollow,setUserUnfollow}=usePost()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const getAllUser=async()=>{
        try {
            const response=await axios.get('/api/users')
            setAllUsers(response.data.users)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getAllUser()
    },[])
    return(
        <Box w='20rem' h='20rem' border='1px'>
            {allUsers&&allUsers.map(dbUsers=>
            <Flex key={dbUsers._id} m='1rem' justify='space-around' align='center'>
            <Box>
            <Heading size='md'>{`${dbUsers.firstName} ${dbUsers.lastName}`}</Heading>
            <Box size='sm'>{dbUsers.username}</Box>
            </Box>
            <Box>
            {userFollow&&userFollow.following.some(item=>item._id===dbUsers._id)?<Button onClick={()=>unfollowHandler(dbUsers._id,setUserFollow)} size='xs' colorScheme='teal' variant='outline'>Following</Button>:<Button onClick={()=>followHandler(dbUsers._id,setUserFollow)} colorScheme='blue' size='xs'>Follow</Button>}
            <UnfollowModal isOpen={isOpen} onClose={onClose} />
            </Box>
            </Flex>
            )}
        </Box>
    )
}