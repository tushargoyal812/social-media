import { useToast,Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { usePost } from '../context/post-context'
export const Toast=({title})=> {
    const toast = useToast()
    const navigate=useNavigate()
    const {login}=usePost()
    return (
            toast({
                title: title,
                status: 'success',
                duration: 4000,
                isClosable: true,
                })
        )
    }