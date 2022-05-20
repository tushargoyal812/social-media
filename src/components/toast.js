import { useToast,Button } from '@chakra-ui/react'
export const Toast=({title})=> {
    const toast = useToast()
    return (
            toast({
                title: title,
                status: 'success',
                duration: 4000,
                isClosable: true,
                })
        )
    }