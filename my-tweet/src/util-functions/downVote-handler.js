import axios from "axios";
import { postHandler } from "../redux/redux-src/features/post/postSlice";

export const downVoteHandler=async(upVotePostId,upVoteCommentId,dispatch)=>{
    const token=localStorage.getItem('user')
    try {
        const response=await axios.post(`/api/comments/downvote/${upVotePostId}/${upVoteCommentId}`,{},
        {
            headers:{
              authorization:token
            }
          })
          dispatch(postHandler(response.data.posts));
    } catch (error) {
        console.log(error);
    }
}