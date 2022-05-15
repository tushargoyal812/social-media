import axios from "axios"
export const loginHandler= async (navigate,login,toast,setLoggedInUser)=>{
    try {
        const response=await axios.post('/api/auth/login',login)
        localStorage.setItem("user",response.data.encodedToken)
        console.log(response,"from login modal");
        localStorage.setItem('userName',JSON.stringify(response.data.foundUser))
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