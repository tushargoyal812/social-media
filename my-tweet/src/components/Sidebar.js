import {
    List,
    ListItem,
    ListIcon,
    Button,
    Icon
  } from '@chakra-ui/react'
  import {MdHome,MdExplore,MdBookmark,MdNotifications,MdMessage,MdListAlt,MdMore} from 'react-icons/md'
  import { FaUser } from "react-icons/fa";
export const Sidebar=()=>{
    return(
        <>
<List fontSize='1.5rem' pr='5rem' spacing={5}>
  <ListItem>
      <Icon mx='1rem' as={MdHome} />
    Home
  </ListItem>
  <ListItem>
  <Icon mx='1rem' as={MdExplore} />
    Explore
  </ListItem>
  <ListItem>
  <Icon mx='1rem' as={MdBookmark} />
    Bookmarks
  </ListItem>
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
  <ListItem>
  <Icon mx='1rem' as={FaUser} />
    Profile
  </ListItem>
  <ListItem>
  <Icon mx='1rem' as={MdMore} />
    More
  </ListItem>
  <Button px='2.5rem' colorScheme='blue'>Tweet</Button>
</List>
        </>
    )
}