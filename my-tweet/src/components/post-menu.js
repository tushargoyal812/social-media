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
  import { GoKebabVertical } from "react-icons/go";
import { usePost } from '../context/post-context';
import { EditModal } from './edit-modal';
export const PostMenu=({userPost})=>{
    const{setPosts,posts}=usePost()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const deletePostHandler=(id)=>{
        let afterDeletePosts=posts.filter(item=>item.id!==id)
        setPosts(afterDeletePosts)
    }
    return(
        <Menu>
    <>
      <MenuButton >
          <Icon w='1.5rem' h='1.5rem' as={Button} as={GoKebabVertical} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={onOpen}>Edit</MenuItem>
        <MenuItem onClick={() => deletePostHandler(userPost.id)}>Delete</MenuItem>
      </MenuList>
      <EditModal userEditPost={userPost} isOpen={isOpen} onClose={onClose} />
    </>
</Menu>
    )
}