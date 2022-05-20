import axios from "axios";
import { postHandler } from "../redux/redux-src/features/post/postSlice";

export const deleteCommentHandler=async(postId,commentId,dispatch)=>{
    console.log(postId,commentId);
    const token=localStorage.getItem('user')
    try {
        const response=await axios.post(`/api/comments/delete/${postId}/${commentId}`,{},{
            headers:{
              authorization:token
            }
          })
          dispatch(postHandler(response.data.posts))
    } catch (error) {
        console.log(error);
    }
}