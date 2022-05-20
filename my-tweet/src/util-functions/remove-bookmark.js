import axios from "axios";
import { bookmarkHandler } from "../redux/redux-src/features/post/postSlice";

export const RemoveBookmarkPostHandler=async(id,dispatch,toast)=>{
    const token=localStorage.getItem("user")
    try {
        const response=await axios.post(`/api/users/remove-bookmark/${id}`,{},{
            headers: {
                authorization: token,
              },
           })
           dispatch(bookmarkHandler(response.data.bookmarks));
           toast({
            title: "Removed from Bookmark",
            status: 'success',
            duration: 2000,
            isClosable: true,
            })
    } catch (error) {
        console.log(error);
    }
}