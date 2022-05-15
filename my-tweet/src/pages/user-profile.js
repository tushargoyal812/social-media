import { Heading } from "@chakra-ui/react"
import { Sidebar } from "../components/Sidebar"
import { Navbar } from "../components/navbar"
import { Wrap,Flex } from "@chakra-ui/react"
import { RightSidebar } from "../components/right-sidebar"
import { UserProfileComponent } from "../components/userProfile"
import { usePost } from "../context/post-context"

export const UserProfile=()=>{
    const {allUsers}=usePost()
    return(
        <>
        <Navbar/>
        <Wrap mx='12rem'>
        <Flex>
        <Sidebar/>
        <UserProfileComponent/>
        <RightSidebar/>
        </Flex>
        </Wrap>
        </>
    )
}