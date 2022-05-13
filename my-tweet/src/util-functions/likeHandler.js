import axios from "axios";

export const likeHandler=async(id,setPosts)=>{
    const token=localStorage.getItem('user')
    try {
        const response=await axios.post(`/api/posts/like/${id}`,{},{
            headers: {
                authorization: token,
              },
           })
           setPosts(response.data.posts)
    } catch (error) {
        console.log(error);
    }
}