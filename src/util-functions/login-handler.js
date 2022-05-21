import axios from "axios"
export const loginHandler= async (navigate,login,toast)=>{
    try {
        const response=await axios.post('/api/auth/login',login)
        localStorage.setItem("user",response.data.encodedToken)
        localStorage.setItem('userName',JSON.stringify(response.data.foundUser))
        const user=localStorage.getItem("user")
        {user&&navigate('/home')}
        toast({
            title: "Logged in Successfully",
            status: 'success',
            duration: 4000,
            isClosable: true,
            })
    } catch (error) {
        console.log(error);
    }
}