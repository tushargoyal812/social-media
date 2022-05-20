export const logoutHandler=(navigate,toast)=>{
    localStorage.removeItem("user")
    navigate('/signup')
    toast({
        title: "Logged Out Successfully",
        status: 'success',
        duration: 4000,
        isClosable: true,
        })
}