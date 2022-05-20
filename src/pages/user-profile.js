import { Heading } from "@chakra-ui/react"
import { Sidebar } from "../components/Sidebar"
import { Navbar } from "../components/navbar"
import { Wrap,Flex } from "@chakra-ui/react"
import { RightSidebar } from "../components/right-sidebar"
import { UserProfileComponent } from "../components/userProfile"

export const UserProfile=()=>{
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