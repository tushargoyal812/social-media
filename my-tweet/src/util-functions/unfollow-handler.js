import axios from "axios";
import { userFollowHandler } from "../redux/redux-src/features/post/postSlice";

export const unfollowHandler=async(id,dispatch)=>{
    const token=localStorage.getItem('user')
    try {
        const response=await axios.post(`/api/users/unfollow/${id}`,{},{
            headers: {
                authorization: token,
              },
           })
        //    setUserFollow(response.data.user);
        dispatch(userFollowHandler(response.data.user))
           console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}