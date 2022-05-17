import axios from "axios";
export const addCommentHandler=async(id,commentData,setPosts)=>{
    const token=localStorage.getItem('user')
    try {
        const response=await axios.post(`/api/comments/add/${id}`,{
            commentData:commentData
        },{
            headers:{
              authorization:token
            }
          })
          console.log(response);
          setPosts(response.data.posts);
    } catch (error) {
        console.log(error);
    }
}