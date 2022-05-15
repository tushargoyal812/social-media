import {
    List,
    ListItem,
    ListIcon,
    Button,
    Icon,
    useDisclosure
  } from '@chakra-ui/react'
  import {MdHome,MdExplore,MdBookmark,MdNotifications,MdMessage,MdListAlt,MdMore} from 'react-icons/md'
  import { FaUser } from "react-icons/fa";
import { CreatePost } from './create-post';
import { Link } from 'react-router-dom';
export const Sidebar=()=>{
    const {onOpen,isOpen,onClose}=useDisclosure()
    return(
        <>
<List fontSize='1.5rem' pr='5rem' spacing={5}>
  <Link to='/'>
      <Icon mx='1rem' as={MdHome} />
    Home
  </Link>
  <ListItem>
  <Icon mx='1rem' as={MdExplore} />
    Explore
  </ListItem>
  <Link to='/bookmarks'>
  <Icon mx='1rem' as={MdBookmark} />
    Bookmarks
  </Link>
  <ListItem>
  <Icon mx='1rem' as={MdNotifications} />
    Notification
  </ListItem>
  <ListItem>
  <Icon mx='1rem' as={MdMessage} />
    Message
  </ListItem>
  <ListItem>
  <Icon mx='1rem' as={MdListAlt} />
    Lists
  </ListItem>
  <Link to='/profile'>
  <Icon mx='1rem' as={FaUser} />
    Profile
  </Link>
  <ListItem>
  <Icon mx='1rem' as={MdMore} />
    More
  </ListItem>
  <Button onClick={onOpen} px='2.5rem' colorScheme='blue'>Tweet</Button>
</List>
<CreatePost isOpen={isOpen} onClose={onClose} />
        </>
    )
}