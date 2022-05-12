import { useRef } from "react"
import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,FormControl,FormLabel,Input } from "@chakra-ui/react"
import { usePost } from "../context/post-context"
import axios from "axios"
export const EditModal=({ isOpen, onOpen, onClose,userEditPost })=> {
    const {posts,setPosts,newPostData,setNewPostData}=usePost()
    const initialRef = useRef()
    const finalRef = useRef()

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
              setPosts(response.data.posts);
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
            <ModalHeader>Edit your post</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input onChange={(e)=>setNewPostData(e.target.value)} value={newPostData} ref={initialRef} />
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