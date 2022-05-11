import { Flex, Wrap } from "@chakra-ui/react"
import { PostSection } from "../components/Post-section"
import { Sidebar } from "../components/Sidebar"

export const Home=()=>{
    return(
        <Wrap my='3rem' mx='12rem'>
        <Flex>
        <Sidebar/>
        <PostSection/>
        <Sidebar/>
        </Flex>
        </Wrap>
    )
}