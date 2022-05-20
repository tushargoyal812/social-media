import {
    Image,Box,FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Flex,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
  import { useState } from "react";
  import axios from 'axios'
  import { InitialFocus } from "../../src/components/Login-modal.js";
  
export const SignUp=()=>{
    const [signUpData,setSignUpData]=useState({firstName:"",lastName:"",username:"",password:""})
  const { isOpen, onOpen, onClose } = useDisclosure()

  const signupHandler= async ()=>{
    try {
      const response=await axios.post('/api/auth/signup',signUpData)
      localStorage.setItem("token",response.data.encodedToken)
    } catch (error) {
      console.log(error);
    }
  }
    return (
        <>
        <Flex>
      <Box boxSize='60rem'>
        <Image h='48rem' w='55rem' src='https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/logos/htc-summary-card.jpg.twimg.768.jpg' alt='Dan Abramov' />
      </Box>
      <Box boxSize='25rem'>
      <FormControl isRequired>
      <FormLabel htmlFor='first-name'>First name</FormLabel>
      <Input onChange={(e)=>setSignUpData({...signUpData,firstName:e.target.value})} mb='1.5rem' id='first-name' placeholder='First name' />
      <FormLabel htmlFor='last-name'>Last name</FormLabel>
      <Input onChange={(e)=>setSignUpData({...signUpData,lastName:e.target.value})} mb='1.5rem' id='last-name' placeholder='Last name' />
      <FormLabel htmlFor='user-name'>User name</FormLabel>
      <Input onChange={(e)=>setSignUpData({...signUpData,username:e.target.value})} mb='1.5rem' type='text' id='user-name' placeholder='User name' />
      <FormLabel htmlFor='password'>Password</FormLabel>
      <Input onChange={(e)=>setSignUpData({...signUpData,password:e.target.value})} mb='1.5rem' type="password" id='password' placeholder='password' />
      <Button onClick={signupHandler} px='10rem' colorScheme='blue'>Sign up</Button>
      <div>Already have an account?</div>
      <Button onClick={onOpen} colorScheme='teal' px='10rem' variant='outline'>Sign in</Button>
      <InitialFocus isOpen={isOpen} onClose={onClose} />
      </FormControl>
      </Box>
      {/* <Toast/> */}
      </Flex>
        </>
    )
}