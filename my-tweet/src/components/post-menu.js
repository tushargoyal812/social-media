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
import axios from 'axios';
  import { GoKebabVertical } from "react-icons/go";
import { usePost } from '../context/post-context';
import { EditModal } from './edit-modal';
export const PostMenu=({userPost})=>{
    const{setPosts}=usePost()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const deletePostHandler=async(id)=>{
      const token=localStorage.getItem('user')
      console.log(id);
      try {
        const response=await axios.delete(`/api/posts/${id}`,{
          headers:{
            authorization:token
          }
        })
        setPosts(response.data.posts)
      } catch (error) {
        console.log(error);
      }
    }
    return(
        <Menu>
    <>
      <MenuButton >
          <Icon w='1.5rem' h='1.5rem' as={Button} as={GoKebabVertical} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={onOpen}>Edit</MenuItem>
        <MenuItem onClick={() => deletePostHandler(userPost._id)}>Delete</MenuItem>
      </MenuList>
      <EditModal userEditPost={userPost} isOpen={isOpen} onClose={onClose} />
    </>
</Menu>
    )
}