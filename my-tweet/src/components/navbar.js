import { Box, Flex, Heading,Button } from "@chakra-ui/react"
import { useEffect } from "react"
import {useNavigate,Link} from 'react-router-dom'

export const Navbar=()=>{
    const navigate=useNavigate()

    const logoutHandler=()=>{
        localStorage.removeItem("user")
        navigate('/signup')
    }


    return(
        <Box border='2px' p='1rem'>
            <Flex justify='space-around' align='center'>
            <Heading size='md'>Logo</Heading>
            <Heading size='md'>Home</Heading>
            {localStorage.getItem('user')?<Button onClick={logoutHandler} colorScheme='teal' variant='outline'>Logout</Button>:<Button onClick={logoutHandler} colorScheme='teal' variant='outline'>Login</Button>}
            </Flex>
        </Box>
    )
}