import { Box, Flex, Heading,Button, useToast } from "@chakra-ui/react"
import {useNavigate,Link} from 'react-router-dom'
import { logoutHandler } from "../util-functions/logout-handler"

export const Navbar=()=>{
    const navigate=useNavigate()
    const toast=useToast()

    return(
        <Box border='2px' p='1rem'>
            <Flex justify='space-around' align='center'>
            {/* <Heading size='md'>Logo</Heading>
            <Heading size='md'>Home</Heading> */}
            {localStorage.getItem('user')?<Link to='/'><Button onClick={()=>logoutHandler(navigate,toast)} colorScheme='teal' variant='outline'>Logout</Button></Link>:<Link to='/'><Button colorScheme='teal' variant='outline'>Login</Button></Link>}
            </Flex>
        </Box>
    )
}