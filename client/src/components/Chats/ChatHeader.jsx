import { Box, HStack, Text, Avatar } from '@chakra-ui/react';
import chatIcon from "../../assets/images/avatar.jpeg"
import React from 'react';

const ChatHeader = () => {
  return (
    <Box width="100vw" bg="purple" height="44px">
        <HStack alignItems="center" align="left">
            <Avatar src={chatIcon} alt="image of group chat" size="md" borderRadius="50px"/>
            <Text textColor="white">Chat Name</Text>
        </HStack>
    </Box>
  )
};

export default ChatHeader;
