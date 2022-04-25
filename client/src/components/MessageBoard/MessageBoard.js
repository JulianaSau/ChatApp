import React, { useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import ChatHeader from "../Chats/ChatHeader";
import InputField from "../InputField/InputField";
import MessageCardContainer from "./MessageCardContainer";
import { useSelector, useDispatch } from "react-redux";

const MessageBoard = () => {
  const selectedChat = useSelector((state) => state.chats).selectedChat;
  // const chatMessages = useSelector((state) => state.messages).allMessages;

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(handleGetAllMessages(chatId))
  // }, []);

  return (
    <>
      {selectedChat === {} ? (
        // to get socket.io on same page
        <Box
          width="76vw"
          height="92vh"
          d="flex"
          alignItems="center"
          justifyContent="center"
          // h="100%"
        >
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      ) : (
        <Box width="76vw" height="92vh">
          <Flex flexDir="column">
            <ChatHeader chatName={selectedChat.chatName} />
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
      )}
    </>
  );
};

export default MessageBoard;
