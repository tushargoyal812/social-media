import axios from "axios"
export const deletePostHandler=async(id,setPosts)=>{
    const token=localStorage.getItem('user')
    try {
      const response=await axios.delete(`/api/posts/${id}`,{
        headers:{
          authorization:token
        }
      })
      setPosts(response.data.posts)
    } catch (error) {
      console.log(error);
    }
  }