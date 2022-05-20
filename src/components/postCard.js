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
export const PostCard=({post})=>{
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

    const sortByDateAndTime=()=>{
    const sorted=[...posts].sort((a,b)=>a.createdAt.slice(17,19)-b.createdAt.slice(17,19))
    dispatch(postHandler(sorted));
    }

    const sortByTrending=(action)=>{
        if(action==='trending')
        {
        const sorted=[...posts].sort((a,b)=>b.likes.likeCount-a.likes.likeCount)
        dispatch(postHandler(sorted));
        }else{
            dispatch(postHandler(posts));
        }
    }
    return(
        <Box mx='2.5rem' my='3rem' key={post._id}>
                    <Flex justify='space-between'>
                    <Heading size='md'>{post.username}</Heading>
                    <PostMenu userPost={post} />
                    </Flex>
                    <Box size='sm'>{post.content}</Box>
                    <Box my='1.5rem'>
                    <Flex justify='space-around'>
                    <Flex align='center'>
                    <Box>{post.likes.likeCount}</Box>
                    {post.likes.likeCount===0?<Icon onClick={()=>likeHandler(post._id,dispatch)} h='2rem' w='2rem' as={MdOutlineThumbUp}/>:<Icon onClick={()=>dislikeHandler(post._id,dispatch)} h='2rem' w='2rem' as={MdThumbUp} />}
                    </Flex>
                    <Icon onClick={()=>{dispatch(postIdHandler(post._id))
                    onOpen()
                    setOpenComment(true)}} h='2rem' w='2rem' as={BiMessageRounded}/>
                    {openComment&&<CommentModal onClose={onClose} isOpen={isOpen}  />}
                    <AddBookmark userPost={post}/>
                    </Flex>
                    </Box>
                    <Box>
                        {post.comments.map(data=><Box key={data._id}>
                            <Flex justify='space-between'>
                            <Box>
                        <Flex>        
                        <Box px='0.5rem'>
                        <Avatar name='Tushar Goyal' src='https://pbs.twimg.com/profile_images/1418454146693222406/ARD6Bp1J_400x400.jpg' />
                        </Box>
                        <Box>
                        <Heading size='md'>{data.username}</Heading>
                        <Box>{data.commentData}</Box>
                        </Box>
                        <Icon onClick={()=>upVoteHandler(post._id,data._id,dispatch)} mx='1rem' as={BiUpvote}/>
                        <Icon onClick={()=>downVoteHandler(post._id,data._id,dispatch)} as={BiDownvote}/>
                        {data.votes.upvotedBy.map(upvoteItem=><Box key={upvoteItem._id}>
                            <Heading size='sm'> up voted By {upvoteItem.username}</Heading>
                            </Box>)}
                        {data.votes.downvotedBy.map(upvoteItem=><Box key={upvoteItem._id}>
                            <Heading size='sm'> down voted By {upvoteItem.username}</Heading>
                            </Box>)}
                            </Flex>
                            </Box>
                            <Box>
                        <Menu>
                        <>
                        <MenuButton>
                        <Icon w='1.5rem' h='1.5rem' as={Button} as={GoKebabVertical} />
                        </MenuButton>
                        <MenuList>
                        <MenuItem onClick={()=>{onOpen()
                        dispatch(commentIdHandler(data._id))
                        setOpenEditComment(true)
                        setOpenComment(false)
                        }}>Edit</MenuItem>
                        <MenuItem onClick={()=>{
                            dispatch(postIdHandler(post._id))
                            dispatch(commentIdHandler(data._id))
                            deleteCommentHandler(post._id,data._id,dispatch)
                            }}>Delete</MenuItem>
                        </MenuList>
                        </>
                        {openEditComment&&<EditComment isOpen={isOpen} onClose={onClose} />}
                        </Menu>
                        </Box>
                        </Flex>
                        </Box>)}
                    </Box>
                </Box>
    )
}