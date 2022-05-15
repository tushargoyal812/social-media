import { Box,Avatar, Heading, Flex, Link,Button,useDisclosure, Wrap } from "@chakra-ui/react"
import { useEffect,useRef } from "react"
import { usePost } from "../context/post-context"
import {NavLink} from 'react-router-dom'
import { EditProfileModal } from "./edit-profile-modal"

export const UserProfileComponent=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {loggedInUser,setLoggedInUser,userFollow}=usePost()

    const getUserData=()=>{
        const userData=JSON.parse(localStorage.getItem("userName"))
        setLoggedInUser(userData)
        console.log(userData,"userData");
    }

    useEffect(()=>{
        getUserData()
    },[])

    return(
        <>
        <Box>
        <Box border='1px' w='38rem' h='12rem'></Box>
        <Box pos='relative'>
        <Box w='38rem' px='0.5rem' pos='absolute' top='-5rem'>
        <Avatar m='0.5rem' size='2xl' name='Segun Adebayo' src='https://pbs.twimg.com/profile_images/1418454146693222406/ARD6Bp1J_400x400.jpg' />
        <Box>
        {loggedInUser&&<Flex justify='space-between'>
            <Box mb='0.5rem'>
            <Heading size='md'>{`${loggedInUser.firstName} ${loggedInUser.lastName}`}</Heading>
            <Box size='md'>@{loggedInUser.username}</Box>
            </Box>
            <Box>
            <Button ml='auto' onClick={onOpen} colorScheme='teal' variant='outline'>Edit profile</Button>
            </Box>
        </Flex>}
        {loggedInUser&&<Box mb='0.5rem'><Box mb='0.5rem'>{loggedInUser.bio}</Box>
        <Link color='blueviolet' href="https://tushar29.netlify.app/">{loggedInUser.portfolioURL}</Link>
        </Box>}
        </Box>
        <EditProfileModal isOpen={isOpen} onClose={onClose} />
        <Flex gap='1'>
            <Flex gap='1'>
            {userFollow?<Box>{userFollow.following.length}</Box>:<Box>0</Box>}<NavLink to='/following'>Following</NavLink>
            </Flex>
            <Flex gap='1'>
            {userFollow?<Box>{userFollow.followers.length}</Box>:<Box>0</Box>}<NavLink to='/following'>Followers</NavLink>
            </Flex>
            </Flex>
            </Box>
        </Box>
        </Box>
        </>
    )
}