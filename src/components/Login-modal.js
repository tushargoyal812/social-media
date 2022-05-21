import {useRef, useState} from "react"
import { Button,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,FormControl,FormLabel,Input,Flex, Icon, InputRightElement } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { loginHandler } from "../util-functions/login-handler"
import { useToast } from "@chakra-ui/react"
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import { ViewIcon,ViewOffIcon } from '@chakra-ui/icons'
export function InitialFocus({isOpen,onClose}) {
  const [login,setLogin]=useState({username:"",password:""})
  const navigate=useNavigate()
  const toast=useToast()
    const initialRef =useRef()
    const finalRef =useRef()
    const [showEye,setShowEye]=useState(false)

  
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
                <Input onChange={(e)=>setLogin({...login,username:e.target.value})} type='text' ref={initialRef} placeholder='User name' />
              </FormControl>
  
              <FormControl mt={4} pos='relative'>
                <FormLabel>Password</FormLabel>
                <Input onChange={(e)=>setLogin({...login,password:e.target.value})} type={showEye?"text":"password"} placeholder='password' />
                {showEye?<InputRightElement cursor='pointer' w='1.5rem' h='1.5rem' pos='relative' top='-2rem' left='23rem' onClick={()=>setShowEye(false)} children={<ViewIcon color='black.500' />} />:<InputRightElement cursor='pointer' w='1.5rem' h='1.5rem' pos='relative' top='-2rem' left='23rem' onClick={()=>setShowEye(true)} children={<ViewOffIcon color='black.500' />} />}
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