import { Box, HStack, Text, Avatar } from "@chakra-ui/react";
import chatIcon from "../../assets/images/avatar.jpeg";
import React from "react";

const ChatHeader = () => {
  return (
    <Box width="76vw" bg="#70058F" height="44px">
      <HStack alignItems="center" align="left" pl="1.5vw" mt="1vh">
        <Avatar
          src={chatIcon}
          alt="image of group chat"
          size="sm"
          borderRadius="50px"
        />
        <Text textColor="white">Chat Name</Text>
      </HStack>
    </Box>
  );
};

export default ChatHeader;
