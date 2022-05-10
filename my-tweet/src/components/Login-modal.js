import {useRef, useState} from "react"
import { Button,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,FormControl,FormLabel,Input,Flex } from "@chakra-ui/react"
import axios from "axios"
export function InitialFocus({isOpen,onClose}) {
  
    const initialRef =useRef()
    const finalRef =useRef()
    const [login,setLogin]=useState({username:"",password:""})

    const loginHandler= async ()=>{
        try {
            const response=await axios.post('/api/auth/login',login)
            localStorage.setItem("user",response.data.encodedToken)
        } catch (error) {
            console.log(error);
        }
    }
  
    return (
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>User name</FormLabel>
                <Input onChange={(e)=>setLogin({...login,username:e.target.value})} type="text" ref={initialRef} placeholder='User name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input onChange={(e)=>setLogin({...login,password:e.target.value})} type='password' placeholder='password' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              {/* <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button> */}
              <Flex>
              <Button onClick={loginHandler}>Login</Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }