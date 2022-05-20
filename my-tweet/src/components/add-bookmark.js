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
  import { MdBookmark } from "react-icons/md";
import { usePost } from '../context/post-context';
import { RemoveBookmarkPostHandler } from '../util-functions/remove-bookmark';
import { useToast } from '@chakra-ui/react';
import { bookmarkHandler } from '../redux/redux-src/features/post/postSlice';
import { useSelector,useDispatch } from 'react-redux';
export const AddBookmark=({userPost})=>{
    // const {userBookmarks,setUserBookmarks}=usePost()
    const toast=useToast()
    const dispatch=useDispatch()
    const {userBookmarks}=useSelector(store=>store.userBookmarks)
    const bookmarkPostHandler=async(id)=>{
        const token=localStorage.getItem('user')
            try {
                const response=await axios.post(`/api/users/bookmark/${id}`,{},{
                 headers: {
                     authorization: token,
                   },
                })
               dispatch(bookmarkHandler(response.data.bookmarks))
                toast({
                    title: "Added to Bookmark",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                    })
             } catch (error) {
                 console.log(error);
             }
        
    }
    return(
        <Menu>
    <>
      <MenuButton >
          <Icon w='1.5rem' h='1.5rem' as={Button} as={MdBookmark} />
      </MenuButton>
      <MenuList>
          {userBookmarks.some(item=>item._id===userPost._id)?<MenuItem onClick={()=>RemoveBookmarkPostHandler(userPost._id,dispatch,toast)}>Remove from Bookmark</MenuItem>:<MenuItem onClick={()=>bookmarkPostHandler(userPost._id)}>Bookmark</MenuItem>} 
      </MenuList>
    </>
</Menu>
    )
}