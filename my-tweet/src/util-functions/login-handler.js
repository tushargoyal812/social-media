import axios from "axios"
export const loginHandler= async (navigate,login,toast)=>{
    try {
        const response=await axios.post('/api/auth/login',login)
        localStorage.setItem("user",response.data.encodedToken)
        navigate('/')
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