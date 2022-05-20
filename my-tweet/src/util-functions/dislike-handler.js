import axios from "axios";
import { postHandler } from "../redux/redux-src/features/post/postSlice";

export const dislikeHandler=async(id,dispatch)=>{
    const token=localStorage.getItem('user')
    try {
        const response=await axios.post(`/api/posts/dislike/${id}`,{},{
            headers: {
                authorization: token,
              },
           })
           dispatch(postHandler(response.data.posts))
    } catch (error) {
        console.log(error);
    }
}