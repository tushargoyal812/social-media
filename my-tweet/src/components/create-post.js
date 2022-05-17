import {useRef} from "react"
import { Button,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,FormControl,FormLabel,Input,Flex } from "@chakra-ui/react"
import axios from "axios"
import { usePost } from "../context/post-context"
export const CreatePost=({isOpen,onClose,onOpen})=> {
    const initialRef = useRef()
    const finalRef = useRef()
    const {setPosts,newPostData,setNewPostData}=usePost()


    const addPost= async ()=>{
        const token=localStorage.getItem("user")
        try {
            const response=await axios.post('/api/posts',{
              postData:newPostData
            },{
                headers: {
                  authorization: token,
                },
              })
              console.log(response);
              setPosts(response.data.posts)
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
            <ModalHeader>Create your post</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input onChange={(e)=>setNewPostData(e.target.value)} ref={initialRef} placeholder='Whats happening?' />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button onClick={addPost} colorScheme='blue' mr={3}>
                Tweet
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }