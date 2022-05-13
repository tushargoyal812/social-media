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
import { usePost } from '../context/post-context';
import { EditModal } from './edit-modal';
export const PostMenu=({userPost})=>{
    const{setPosts,posts}=usePost()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <Menu>
    <>
      <MenuButton >
          <Icon w='1.5rem' h='1.5rem' as={Button} as={GoKebabVertical} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={onOpen}>Edit</MenuItem>
        <MenuItem onClick={() => deletePostHandler(userPost._id,setPosts)}>Delete</MenuItem>
      </MenuList>
      <EditModal userEditPost={userPost} isOpen={isOpen} onClose={onClose} />
    </>
</Menu>
    )
}