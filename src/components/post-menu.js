import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Icon,useDisclosure
  } from '@chakra-ui/react'
  import { deletePostHandler } from '../util-functions/delete-post-handler';
  import { GoKebabVertical } from "react-icons/go";
import { EditModal } from './edit-modal';
import { useSelector,useDispatch } from 'react-redux';
import { setPostEditData } from '../redux/redux-src/features/post/postSlice';
export const PostMenu=({userPost})=>{
    const dispatch=useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <Menu>
    <>
      <MenuButton >
          <Icon w='1.5rem' h='1.5rem' as={Button} as={GoKebabVertical} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={()=>{
                  onOpen()
                  dispatch(setPostEditData(userPost.content))
        }
        }>Edit</MenuItem>
        <MenuItem onClick={() => deletePostHandler(userPost._id,dispatch)}>Delete</MenuItem>
      </MenuList>
      <EditModal userEditPost={userPost} isOpen={isOpen} onClose={onClose} />
    </>
</Menu>
    )
}