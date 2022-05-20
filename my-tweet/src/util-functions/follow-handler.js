import axios from "axios";
import { userFollowHandler } from "../redux/redux-src/features/post/postSlice";

export const followHandler=async(id,dispatch)=>{
    const token=localStorage.getItem('user')
    try {
        const response=await axios.post(`/api/users/follow/${id}`,{},{
            headers: {
                authorization: token,
              },
           })
           dispatch(userFollowHandler(response.data.user))
           console.log(response.data.user);
    } catch (error) {
        console.log(error);
    }
}