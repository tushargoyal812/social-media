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
import { editUserDataHandler } from "../redux/redux-src/features/post/postSlice"
import { useSelector,useDispatch } from "react-redux"
import { loggedInUserHandler } from "../redux/redux-src/features/post/postSlice"
export const EditProfileModal=({isOpen,onClose})=>{
    const initialRef = useRef()
    const finalRef = useRef()
    const dispatch=useDispatch()
    const {editUserData}=useSelector(store=>store.posts)

    const editUser=async()=>{
        const token=localStorage.getItem("user")
        try {
            const response=await axios.post(`/api/users/edit`,{
                userData:editUserData
            },{
                headers:{
                  authorization:token
                }
              })
              dispatch(loggedInUserHandler(response.data.user))
        } catch (error) {
            console.log(error);
        }
    }

    const onChangeHandler=(e)=>{
      const {name,value}=e.target
      dispatch(editUserDataHandler({...editUserData,[name]:value}))
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
              <Input name="firstName" defaultValue={editUserData.firstName} onChange={(e)=>onChangeHandler(e)} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input name="lastName" defaultValue={editUserData.lastName} onChange={(e)=>onChangeHandler(e)} placeholder='Last name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Username</FormLabel>
              <Input name="username" defaultValue={editUserData.username} onChange={(e)=>onChangeHandler(e)} placeholder='Username' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Bio</FormLabel>
              <Input name="bio" defaultValue={editUserData.bio} onChange={(e)=>onChangeHandler(e)} placeholder='Bio' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Portfolio URL</FormLabel>
              <Input name="portfolioURL" defaultValue={editUserData.portfolioURL} onChange={(e)=>onChangeHandler(e)} placeholder='Portfolio URL' />
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