import { Box,Avatar, Heading, Flex, Link,Button,useDisclosure, Wrap } from "@chakra-ui/react"
import { useEffect } from "react"
import {NavLink} from 'react-router-dom'
import { EditProfileModal } from "./edit-profile-modal"
import { useSelector,useDispatch } from "react-redux"
import { loggedInUserHandler } from "../redux/redux-src/features/post/postSlice"

export const UserProfileComponent=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch=useDispatch()
    const {loggedInUser}=useSelector(store=>store.posts)
    const {userFollow}=useSelector(store=>store.posts)
    const {profilePic}=useSelector(store=>store.posts)


    const getUserData=()=>{
        const userData=JSON.parse(localStorage.getItem("userName"))
        dispatch(loggedInUserHandler(userData))
    }

    useEffect(()=>{
        getUserData()
    },[])

    console.log(profilePic);

    return(
        <>
        <Box>
        <Box border='1px' w='38rem' h='12rem'></Box>
        <Box pos='relative'>
        <Box w='38rem' px='0.5rem' pos='absolute' top='-5rem'>
        <Avatar m='0.5rem' size='2xl' name='Segun Adebayo' src={profilePic} />
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