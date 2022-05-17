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
export const EditComment=({onOpen,isOpen,onClose})=>{
    const initialRef = useRef()
    const finalRef = useRef()
    const {commentDetail,setCommentDetail,userPostId,userCommentId,setPosts}=usePost()
    return(
        <>
      {/* <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

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
              <Input value={commentDetail} onChange={(e)=>setCommentDetail(e.target.value)} ref={initialRef} placeholder='Edit Comment' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={()=>editCommentHandler(commentDetail,userPostId,userCommentId,setPosts)} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
}