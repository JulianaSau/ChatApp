import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import ChatHeader from "../Chats/ChatHeader";
import MessageCardContainer from "./MessageCardContainer";
import InputField from "../InputField/InputField";

const MessageBoard = () => {
  return (
    <Box width="76vw" height="92vh">
      <Flex flexDir="column">
        <ChatHeader />
        <MessageCardContainer />
        <InputField />
      </Flex>
    </Box>
  );
};

export default MessageBoard;
