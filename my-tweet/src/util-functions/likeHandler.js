import axios from "axios";
import { postHandler } from "../redux/redux-src/features/post/postSlice";

export const likeHandler=async(id,dispatch)=>{
    const token=localStorage.getItem('user')
    try {
        const response=await axios.post(`/api/posts/like/${id}`,{},{
            headers: {
                authorization: token,
              },
           })
           dispatch(postHandler(response.data.posts))
    } catch (error) {
        console.log(error);
    }
}