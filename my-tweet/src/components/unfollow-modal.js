import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Heading
  } from '@chakra-ui/react'
import { usePost } from '../context/post-context'
import { unfollowHandler } from '../util-functions/unfollow-handler'
export const UnfollowModal=({isOpen,onClose})=>{
    return(
        <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Unfollow {userUnfollow.username}?</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
          Their Tweets will no longer show up in your home timeline. You can still view their profile, unless their Tweets are protected. 
          </ModalBody>
          <ModalFooter>
          {/* <Button onClick={()=>unfollowHandler(userUnfollow._id,setUserUnfollow)} colorScheme='blue' >Unfollow</Button> */}
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
}