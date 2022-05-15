import { Heading,Wrap,Flex,Box,Icon } from "@chakra-ui/react"
import { Navbar } from "./navbar"
import { Sidebar } from "./Sidebar"
import { PostMenu } from "./post-menu"
import { AddBookmark } from "./add-bookmark"
import { usePost } from "../context/post-context"
import { BiLike,BiMessageRounded } from "react-icons/bi";
import { MdOutlineThumbUp,MdThumbUp } from "react-icons/md";
import { likeHandler } from "../util-functions/likeHandler"
import { dislikeHandler } from "../util-functions/dislike-handler"

export const BookMarks=()=>{
    const {userBookmarks,setPosts}=usePost()
    return(
        <>
        <Navbar/>
        <Wrap mx='12rem'>
        <Flex>
        <Sidebar/>
        <Box w='40rem' border='2px' borderColor='gray.200'>
                {userBookmarks&&userBookmarks.map(post=>
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
        </Wrap>
        </>
    )
}