import axios from "axios";

export const upVoteHandler=async(upVotePostId,upVoteCommentId,setPosts)=>{
    const token=localStorage.getItem('user')
    console.log(upVotePostId,upVoteCommentId,token,"from frondtend");
    try {
        const response=await axios.post(`/api/comments/upvote/${upVotePostId}/${upVoteCommentId}`,{},{
            headers:{
              authorization:token
            }
          })
          setPosts(response.data.posts);
    } catch (error) {
        console.log(error);
    }
}