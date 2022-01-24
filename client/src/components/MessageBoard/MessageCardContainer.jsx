import { Box } from "@chakra-ui/react";
import React from "react";
import { messages } from "../../dummydata/messsageList";
import MessageCard from "./MessageCard";

const MessageCardContainer = () => {
  return (
    <Box height="66vh" overflowY="scroll">
      {messages.map((message) => {
        return <MessageCard key={message.index} {...message} />;
      })}
      <MessageCard />
    </Box>
  );
};

export default MessageCardContainer;
