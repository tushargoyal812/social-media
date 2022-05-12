import {useRef, useState} from "react"
import { Button,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,FormControl,FormLabel,Input,Flex } from "@chakra-ui/react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Toast } from "./toast"
import { usePost } from "../context/post-context"
import { loginHandler } from "../util-functions/login-handler"
import { useToast } from "@chakra-ui/react"
export function InitialFocus({isOpen,onClose}) {
  const {login,setLogin}=usePost()
  const navigate=useNavigate()
  const toast=useToast()
    const initialRef =useRef()
    const finalRef =useRef()

  
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
            <ModalHeader>Sign in to Twitter</ModalHeader>
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
              <Flex>
              <Button onClick={()=>loginHandler(navigate,login,toast)} colorScheme='blue'>Login</Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }