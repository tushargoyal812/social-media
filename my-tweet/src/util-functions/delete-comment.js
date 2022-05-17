import axios from "axios";

export const deleteCommentHandler=async(postId,commentId,setPosts)=>{
    console.log(postId,commentId);
    const token=localStorage.getItem('user')
    try {
        const response=await axios.post(`/api/comments/delete/${postId}/${commentId}`,{},{
            headers:{
              authorization:token
            }
          })
          setPosts(response.data.posts)
    } catch (error) {
        console.log(error);
    }
}