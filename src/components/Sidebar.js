import {
    List,
    ListItem,
    ListIcon,
    Button,
    Icon,
    useDisclosure,
    Flex,
    Box
  } from '@chakra-ui/react'
  import {MdHome,MdExplore,MdBookmark,MdNotifications,MdMessage,MdListAlt,MdMore} from 'react-icons/md'
  import { FaUser } from "react-icons/fa";
import { CreatePost } from './create-post';
import { Link,NavLink } from 'react-router-dom';
export const Sidebar=()=>{
    const {onOpen,isOpen,onClose}=useDisclosure()
    return(
        <>
<List fontSize='1.5rem' pr='5rem' spacing={5}>
    <Flex direction='column'>
  <Box mt='2rem'>    
  <NavLink to='/home'>
      <Icon mx='1rem' as={MdHome} />
    Home
  </NavLink>
  </Box>
  <Box mt='2rem'>
  <NavLink to='/explore'>
  <Icon mx='1rem' as={MdExplore} />
    Explore
  </NavLink>
  </Box>
  <Box mt='2rem'>
  <NavLink to='/bookmarks'>
  <Icon mx='1rem' as={MdBookmark} />
    Bookmarks
  </NavLink>
  </Box>
  <Box mt='2rem'>
  <NavLink to='/profile'>
  <Icon mx='1rem' as={FaUser} />
    Profile
  </NavLink>
  </Box>
  <Box mt='2rem'>
  <Button onClick={onOpen} px='2.5rem' colorScheme='blue'>Tweet</Button>
  </Box>
</Flex>
</List>
<CreatePost isOpen={isOpen} onClose={onClose} />
        </>
    )
}