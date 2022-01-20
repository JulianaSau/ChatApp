import { Box, Avatar, VStack, IconButton } from "@chakra-ui/react";
import React from "react";
import image from "../../assets/images/avatar.jpeg";
import { FiHome } from "react-icons/fi";
import { BiAddToQueue } from "react-icons/bi";

const ChatIcons = () => {
  return (
    <Box borderWidth="2px" borderColor="blue" borderRadius="50px">
      <Avatar src={image} size="md" alt="chatIcon" />
    </Box>
  );
};

const ChatsPanel = () => {
  return (
    <Box
      bg="#70058F"
      width="6vw"
      height="100vh"
      borderRightWidth="0.1px"
      borderRightColor="gray.200"
    >
      <VStack pt="2vh" spacing="2vh">
        <Box borderWidth="2px" borderColor="blue" borderRadius="50px">
          <IconButton bg="none" icon={<FiHome />} size="md" alt="chatIcon" />
        </Box>
        <ChatIcons />
        <ChatIcons />
        <ChatIcons />
        <Box borderWidth="2px" borderColor="blue" borderRadius="50px">
          <IconButton
            bg="none"
            icon={<BiAddToQueue />}
            size="md"
            alt="chatIcon"
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default ChatsPanel;
