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
import { usePost } from "../context/post-context"
import { CreatePost } from "./create-post"
import { BiLike,BiMessageRounded,BiUpvote,BiDownvote } from "react-icons/bi";
import { MdOutlineThumbUp,MdThumbUp } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { PostMenu } from "./post-menu"
import { EditModal } from "./edit-modal"
import { AddBookmark } from "./add-bookmark"
import { likeHandler } from "../util-functions/likeHandler"
import { dislikeHandler } from "../util-functions/dislike-handler"
import { CommentModal } from "./comment-modal"
import { addCommentHandler } from "../util-functions/add-comment-handler"
import { CommentMenu } from "./comment-menu"
import { GoKebabVertical } from "react-icons/go";
import { EditComment } from "./edit-comment"
import { deleteCommentHandler } from "../util-functions/delete-comment"
import { upVoteHandler } from "../util-functions/upVote-handler"
import { downVoteHandler } from "../util-functions/downVote-handler"

export const PostSection=()=>{
    const {posts,setPosts,commentDetail,setCommentDetail,setUserPostId,userPostId,userCommentId,setUserCommentId}=usePost()
    const [commentInput,setCommentInput]=useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [openComment,setOpenComment]=useState(false)
    const [openEditComment,setOpenEditComment]=useState(false)
    const getPostsFromDb= async ()=>{
        console.log("data aya");
        try {
            const reponse=await axios.get('/api/posts')
            setPosts(reponse.data.posts)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getPostsFromDb()
    },[])

    const sortByDateAndTime=()=>{
    const sorted=[...posts].sort((a,b)=>b.createdAt.slice(17,19)-a.createdAt.slice(17,19))
    setPosts(sorted);
    }

    const sortByTrending=(action)=>{
        if(action==='trending')
        {
        const sorted=[...posts].sort((a,b)=>b.likes.likeCount-a.likes.likeCount)
        setPosts(sorted)
        }else{
            setPosts(posts)
        }
    }

    return(
        <>
        <Flex direction='column'>
         <Box w='40rem' h='9rem' border='2px' borderColor='gray.200'>
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
            <Box w='40rem' border='2px' borderColor='gray.200'>
            <Button onClick={()=>sortByTrending("trending")} colorScheme='teal' variant='outline'>Trending</Button>
            <Button onClick={()=>sortByDateAndTime()} colorScheme='teal' variant='outline'>Sort by Date & Time</Button>
                {posts.map(post=>
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
                    {post.likes.likeCount===0?<Icon onClick={()=>likeHandler(post._id,setPosts)} h='2rem' w='2rem' as={MdOutlineThumbUp}/>:<Icon onClick={()=>dislikeHandler(post._id,setPosts)} h='2rem' w='2rem' as={MdThumbUp} />}
                    </Flex>
                    <Icon onClick={()=>{setUserPostId(post._id)
                    onOpen()
                    setOpenComment(true)}} h='2rem' w='2rem' as={BiMessageRounded}/>
                    {openComment&&<CommentModal onClose={onClose} isOpen={isOpen}  />}
                    <AddBookmark userPost={post}/>
                    </Flex>
                    </Box>
                    <Box w='35rem' py='1rem' h='10rem' border='1px'>
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
                        <Icon onClick={()=>upVoteHandler(post._id,data._id,setPosts)} mx='1rem' as={BiUpvote}/>
                        <Icon onClick={()=>downVoteHandler(post._id,data._id,setPosts)} as={BiDownvote}/>
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
                        setUserCommentId(data._id)
                        setOpenEditComment(true)
                        setOpenComment(false)
                        }}>Edit</MenuItem>
                        <MenuItem onClick={()=>{
                            setUserPostId(post._id)
                            setUserCommentId(data._id)
                            deleteCommentHandler(post._id,data._id,setPosts)
                            }}>Delete</MenuItem>
                        </MenuList>
                        </>
                        {openEditComment&&<EditComment isOpen={isOpen} onClose={onClose} />}
                        </Menu>
                        </Box>
                        </Flex>
                        </Box>)}
                    </Box>
                </Box>)}
            </Box>
            </Flex>
        </>
    )
}


