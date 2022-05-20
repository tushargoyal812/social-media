import { Box, Flex, Heading, Wrap, WrapItem,Avatar,Button,useDisclosure,Icon,Input,Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
     } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { CreatePost } from "./create-post"
import { BiLike,BiMessageRounded,BiUpvote,BiDownvote } from "react-icons/bi";
import { MdOutlineThumbUp,MdThumbUp } from "react-icons/md";
import { PostMenu } from "./post-menu"
import { AddBookmark } from "./add-bookmark"
import { likeHandler } from "../util-functions/likeHandler"
import { dislikeHandler } from "../util-functions/dislike-handler"
import { CommentModal } from "./comment-modal"
import { GoKebabVertical } from "react-icons/go";
import { EditComment } from "./edit-comment"
import { deleteCommentHandler } from "../util-functions/delete-comment"
import { upVoteHandler } from "../util-functions/upVote-handler"
import { downVoteHandler } from "../util-functions/downVote-handler"
import { useSelector,useDispatch } from "react-redux"
import { postHandler } from "../redux/redux-src/features/post/postSlice"
import { postIdHandler } from "../redux/redux-src/features/post/postSlice"
import { commentIdHandler } from "../redux/redux-src/features/post/postSlice"
import { PostCard } from "./postCard";

export const PostSection=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [openComment,setOpenComment]=useState(false)
    const [openEditComment,setOpenEditComment]=useState(false)
    const dispatch=useDispatch()
    const {posts}=useSelector(store=>store.posts)
    const getPostsFromDb= async ()=>{
        try {
            const reponse=await axios.get('/api/posts')
            dispatch(postHandler(reponse.data.posts))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getPostsFromDb()
    },[])

    // const sortByDateAndTime=()=>{
    // const sorted=[...posts].sort((a,b)=>a.createdAt.slice(17,19)-b.createdAt.slice(17,19))
    // dispatch(postHandler(sorted));
    // }

    // const sortByTrending=(action)=>{
    //     if(action==='trending')
    //     {
    //     const sorted=[...posts].sort((a,b)=>b.likes.likeCount-a.likes.likeCount)
    //     dispatch(postHandler(sorted));
    //     }else{
    //         dispatch(postHandler(posts));
    //     }
    // }

    return(
        <>
        <Flex direction='column'>
         <Box w='35rem' h='9rem' border='2px' borderColor='gray.200'>
            <Wrap>
                <Flex align='center'>
                <WrapItem m='1rem'>
                <Avatar name='Dan Abrahmov' src='https://pbs.twimg.com/profile_images/1418454146693222406/ARD6Bp1J_400x400.jpg' />
                </WrapItem>
                <Heading size='md'>What's Happening?</Heading>
                </Flex>
            </Wrap>
            <Flex justify='flex-end'>
                <Button onClick={()=>{onOpen()}} m='1rem' colorScheme='blue'>Tweet</Button>
                <CreatePost isOpen={isOpen} onClose={onClose} />
            </Flex>
            </Box>
            <Box w='35rem' border='2px' borderColor='gray.200'>
            <Button onClick={()=>sortByTrending("trending")} colorScheme='teal' variant='outline'>Trending</Button>
            <Button onClick={()=>sortByDateAndTime()} colorScheme='teal' variant='outline'>Sort by Date & Time</Button>
                {posts.map(post=>
                <PostCard post={post}/>
                )}
            </Box>
            </Flex>
        </>
    )
}


