import axios from "axios";
import { postHandler } from "../redux/redux-src/features/post/postSlice";

export const upVoteHandler=async(upVotePostId,upVoteCommentId,dispatch)=>{
    const token=localStorage.getItem('user')
    console.log(upVotePostId,upVoteCommentId,token,"from frondtend");
    try {
        const response=await axios.post(`/api/comments/upvote/${upVotePostId}/${upVoteCommentId}`,{},{
            headers:{
              authorization:token
            }
          })
          dispatch(postHandler(response.data.posts));
    } catch (error) {
        console.log(error);
    }
}