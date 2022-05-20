import axios from "axios";
import { postHandler } from "../redux/redux-src/features/post/postSlice";

export const editCommentHandler=async(commentDetail,editPostId,editCommentId,dispatch)=>{
    const token=localStorage.getItem('user')
    console.log(commentDetail,editPostId,editCommentId);
    try {
        const response=await axios.post(`/api/comments/edit/${editPostId}/${editCommentId}`,
        {
            commentData:commentDetail
        },{
            headers:{
              authorization:token
            }
          })
          dispatch(postHandler(response.data.posts))
    } catch (error) {
        console.log(error);
    }
}