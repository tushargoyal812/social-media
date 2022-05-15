import axios from "axios";

export const unfollowHandler=async(id,setUserFollow)=>{
    const token=localStorage.getItem('user')
    try {
        const response=await axios.post(`/api/users/unfollow/${id}`,{},{
            headers: {
                authorization: token,
              },
           })
           setUserFollow(response.data.user);
           console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}