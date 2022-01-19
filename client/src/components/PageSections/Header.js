import React from 'react'
import { Box, Text, Input, InputGroup, InputLeftAddon, HStack, Avatar } from '@chakra-ui/react'
import avatar from "../../assets/images/avatar.jpeg"

const Header = () => {
    return (

        <Box bg="purple">
        <HStack>
            <Text>WeChat</Text>
                <InputGroup>
                    <InputLeftAddon></InputLeftAddon>
                    <Input placeholder ="Search Here" width={[24, 46]} />
                </InputGroup>
                <Avatar src={avatar} alt="avatar"/>
            </HStack>
        </Box>
    )
}

export default Header
