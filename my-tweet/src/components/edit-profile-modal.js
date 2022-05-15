import { useRef } from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
import axios from "axios"
import { usePost } from "../context/post-context"
export const EditProfileModal=({isOpen,onClose})=>{
    const initialRef = useRef()
    const finalRef = useRef()
    const {editUserData,setEditUserData,loggedInUser,setLoggedInUser}=usePost()

    const editUser=async()=>{
        console.log(editUserData,"edit user");
        const token=localStorage.getItem("user")
        try {
            const response=await axios.post(`/api/users/edit`,{
                userData:editUserData
            },{
                headers:{
                  authorization:token
                }
              })
              setLoggedInUser(response.data.user)
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input value={editUserData.firstName} onChange={(e)=>{setEditUserData({...editUserData,firstName:e.target.value})}} ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input value={editUserData.lastName} onChange={(e)=>{setEditUserData({...editUserData,lastName:e.target.value})}} placeholder='Last name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Username</FormLabel>
              <Input value={editUserData.username} onChange={(e)=>{setEditUserData({...editUserData,username:e.target.value})}} placeholder='Username' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Bio</FormLabel>
              <Input value={editUserData.bio} onChange={(e)=>{setEditUserData({...editUserData,bio:e.target.value})}} placeholder='Bio' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Portfolio URL</FormLabel>
              <Input value={editUserData.portfolioURL} onChange={(e)=>{setEditUserData({...editUserData,portfolioURL:e.target.value})}} placeholder='Portfolio URL' />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>editUser()} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}