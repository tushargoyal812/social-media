import { Flex, Wrap } from "@chakra-ui/react"
import { Navbar } from "../components/navbar"
import { PostSection } from "../components/Post-section"
import { Sidebar } from "../components/Sidebar"

export const Home=()=>{
    return(
        <>
        <Navbar/>
        <Wrap mx='12rem'>
        <Flex>
        <Sidebar/>
        <PostSection/>
        {/* <Sidebar/> */}
        </Flex>
        </Wrap>
        </>
    )
}