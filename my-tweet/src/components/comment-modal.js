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
import { commentDetailHandler } from '../redux/redux-src/features/post/postSlice'
import { useSelector,useDispatch } from 'react-redux'
export const CommentModal=({onClose,isOpen})=>{
    const initialRef = useRef()
    const finalRef = useRef()
    const dispatch=useDispatch()
    const {commentDetail}=useSelector(store=>store.posts)
    const {userPostId}=useSelector(store=>store.posts)
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
              <Input onChange={(e)=>dispatch(commentDetailHandler(e.target.value))} ref={initialRef} placeholder='Tweet your reply' />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>addCommentHandler(userPostId,commentDetail,dispatch)} colorScheme='blue' mr={3}>
              reply
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
}