import { Box } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"

export const OtherUserProfile=()=>{
    // const dispatch=useDispatch()
    // const getAllUser=async()=>{
    //     try {
    //         const response=await axios.get('/api/users')
    //         dispatch(allUsersHandler(response.data.users))
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(()=>{
    //     getAllUser()
    // },[])
    const {username}=useParams()
    const {allUsers}=useSelector(store=>store.posts)

    let profileUser=allUsers.find(user=>user.username===username)
    // console.log(profileUser);
    return(
        <>
        {/* {allUsers.find(user=>user.username===username)&&<Box>{user.firstName}</Box>} */}
        </>
    )
}