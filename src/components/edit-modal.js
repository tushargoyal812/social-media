import { useEffect, useRef } from "react"
import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,FormControl,FormLabel,Input } from "@chakra-ui/react"
import axios from "axios"
import { useSelector,useDispatch } from "react-redux"
import { postHandler,newPostHandler } from "../redux/redux-src/features/post/postSlice"
export const EditModal=({ isOpen, onOpen, onClose,userEditPost })=> {
    const initialRef = useRef()
    const finalRef = useRef()
    const dispatch=useDispatch()
    const {newPostData}=useSelector(store=>store.posts)
    const {postEditData}=useSelector(store=>store.posts)

    const saveEditHandler=async(id)=>{
        const token=localStorage.getItem("user")
        try {
            const response=await axios.post(`/api/posts/edit/${id}`,{
                postData:newPostData,
            },{
                headers: {
                  authorization: token,
                },
              })
              dispatch(postHandler(response.data.posts))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
      dispatch(newPostHandler(postEditData))
    },[postEditData])
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
            <ModalHeader>Edit your post</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input onChange={(e)=>dispatch(newPostHandler(e.target.value))} value={newPostData} ref={initialRef} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={()=>saveEditHandler(userEditPost._id)} colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }