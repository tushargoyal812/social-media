import axios from "axios";

export const RemoveBookmarkPostHandler=async(id,setUserBookmarks,toast)=>{
    const token=localStorage.getItem("user")
    try {
        const response=await axios.post(`/api/users/remove-bookmark/${id}`,{},{
            headers: {
                authorization: token,
              },
           })
           setUserBookmarks(response.data.bookmarks);
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