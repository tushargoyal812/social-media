import axios from "axios";

export const followHandler=async(id,setUserFollow)=>{
    const token=localStorage.getItem('user')
    try {
        const response=await axios.post(`/api/users/follow/${id}`,{},{
            headers: {
                authorization: token,
              },
           })
           setUserFollow(response.data.user)
           console.log(response.data.user);
    } catch (error) {
        console.log(error);
    }
}