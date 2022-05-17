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
  import { useEffect, useRef } from 'react'
import { usePost } from '../context/post-context'
import { addCommentHandler } from '../util-functions/add-comment-handler'
export const CommentModal=({onClose,isOpen})=>{
    const initialRef = useRef()
    const finalRef = useRef()
    const {commentDetail,setCommentDetail,setPosts,userPostId}=usePost()
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
          <ModalHeader>Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input onChange={(e)=>setCommentDetail(e.target.value)} ref={initialRef} placeholder='Tweet your reply' />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>addCommentHandler(userPostId,commentDetail,setPosts)} colorScheme='blue' mr={3}>
              reply
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
}