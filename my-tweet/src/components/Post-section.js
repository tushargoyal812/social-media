import { Box, Flex, Heading, Wrap, WrapItem,Avatar,Button } from "@chakra-ui/react"

export const PostSection=()=>{
    return(
        <>
        <Box w='40rem' h='9rem' border='2px' borderColor='gray.200'>
            <Wrap>
                <Flex align='center'>
                <WrapItem m='1rem'>
                <Avatar name='Dan Abrahmov' src='https://pbs.twimg.com/profile_images/1418454146693222406/ARD6Bp1J_400x400.jpg' />
                </WrapItem>
                <Heading size='md'>What's Happening?</Heading>
                </Flex>
            </Wrap>
            <Flex justify='flex-end'>
                <Button m='1rem' colorScheme='blue'>Tweet</Button>
            </Flex>    
            </Box>
        </>
    )
}