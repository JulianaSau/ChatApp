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
        <Box
          m="5px"
          bg="white"
          overflowY="hidden"
          css={{
            "&::-webkit-scrollbar": {
              width: "0",
            },
            "&::-webkit-scrollbar-track": {
              width: "0",
            },
          }}
        >
          <MessageCardContainer />
        </Box>
        <InputField />
      </Flex>
    </Box>
  );
};

export default MessageBoard;
