import axios from "axios";

export const downVoteHandler=async(upVotePostId,upVoteCommentId,setPosts)=>{
    const token=localStorage.getItem('user')
    try {
        const response=await axios.post(`/api/comments/downvote/${upVotePostId}/${upVoteCommentId}`,{},
        {
            headers:{
              authorization:token
            }
          })
          setPosts(response.data.posts);
    } catch (error) {
        console.log(error);
    }
}