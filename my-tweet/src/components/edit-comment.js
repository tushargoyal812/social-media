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
  import {useRef} from 'react'
import { usePost } from '../context/post-context'
import { editCommentHandler } from '../util-functions/edit-comment-handler'
import { useSelector,useDispatch } from 'react-redux'
import { commentDetailHandler } from '../redux/redux-src/features/post/postSlice'
export const EditComment=({onOpen,isOpen,onClose})=>{
    const initialRef = useRef()
    const finalRef = useRef()
    const dispatch=useDispatch()
    const {commentDetail}=useSelector(store=>store.posts)
    const {userPostId}=useSelector(store=>store.posts)
    const {userCommentId}=useSelector(store=>store.posts)
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
          <ModalHeader>Edit comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input value={commentDetail} onChange={(e)=>dispatch(commentDetailHandler(e.target.value))} ref={initialRef} placeholder='Edit Comment' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={()=>editCommentHandler(commentDetail,userPostId,userCommentId,dispatch)} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
}