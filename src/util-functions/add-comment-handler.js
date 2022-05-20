import axios from "axios";
import { postHandler } from "../redux/redux-src/features/post/postSlice";
export const addCommentHandler=async(id,commentData,dispatch)=>{
    const token=localStorage.getItem('user')
    try {
        const response=await axios.post(`/api/comments/add/${id}`,{
            commentData:commentData
        },{
            headers:{
              authorization:token
            }
          })
          dispatch(postHandler(response.data.posts));
    } catch (error) {
        console.log(error);
    }
}