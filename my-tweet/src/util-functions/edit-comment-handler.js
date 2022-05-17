import axios from "axios";

export const editCommentHandler=async(commentDetail,editPostId,editCommentId,setPosts)=>{
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
          console.log(response);
          setPosts(response.data.posts)
    } catch (error) {
        console.log(error);
    }
}