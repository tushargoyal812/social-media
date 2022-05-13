import { Box, Flex, Heading, Wrap, WrapItem,Avatar,Button,useDisclosure,Icon } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { usePost } from "../context/post-context"
import { CreatePost } from "./create-post"
import { BiLike,BiMessageRounded } from "react-icons/bi";
import { MdOutlineThumbUp,MdThumbUp } from "react-icons/md";
import { PostMenu } from "./post-menu"
import { EditModal } from "./edit-modal"
import { AddBookmark } from "./add-bookmark"
import { likeHandler } from "../util-functions/likeHandler"
import { dislikeHandler } from "../util-functions/dislike-handler"

export const PostSection=()=>{
    const {posts,setPosts,liked,setLiked}=usePost()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const getPostsFromDb= async ()=>{
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
                <Button onClick={onOpen} m='1rem' colorScheme='blue'>Tweet</Button>
            </Flex>
            </Box>
            <CreatePost isOpen={isOpen} onClose={onClose} />
            <Box w='40rem' border='2px' borderColor='gray.200'>
                {posts&&posts.map(post=>
                <Box mx='2.5rem' my='3rem' key={post.id}>
                    <Flex justify='space-between'>
                    <Heading size='md'>{post.username}</Heading>
                    <PostMenu userPost={post} />
                    </Flex>
                    <Box size='sm'>{post.content}</Box>
                    <Box my='1.5rem'>
                    <Flex justify='space-around'>
                    <Box>{post.likes.likeCount}</Box>
                    {post.likes.likeCount===0?<Icon onClick={()=>likeHandler(post._id,setPosts)} h='2rem' w='2rem' as={MdOutlineThumbUp}/>:<Icon onClick={()=>dislikeHandler(post._id,setPosts)} h='2rem' w='2rem' as={MdThumbUp} />}
                    <Icon h='2rem' w='2rem' as={BiMessageRounded}/>
                    <AddBookmark userPost={post}/>
                    </Flex>
                    </Box>
                </Box>)}
            </Box>
            </Flex>
        </>
    )
}