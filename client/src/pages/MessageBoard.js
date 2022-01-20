import React from 'react';
import { Box, Flex } from "@chakra-ui/react"
import ChatHeader from '../components/Chats/ChatHeader';
import MessageCardContainer from "../components/Messages/MessageCardContainer"
import InputField from '../components/InputField/InputField';

const MessageBoard = () => {
  return (
    <Box width = "100vw" height = "100vh">
    <Flex flexDir="column">
      <ChatHeader />
        <MessageCardContainer />
        <InputField/>
      </Flex>
    </Box>
  )
};

export default MessageBoard;

