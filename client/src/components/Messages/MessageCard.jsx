import React from "react";
import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";

const MessageCard = ({ name, time, message, avatar }) => {
  return (
    <Box shadow="lg" rounded="sm" p="3" m="4" bg="#F9F5F6" width="50%">
      <Flex flexDir="column">
        <HStack>
          <Avatar
            src={avatar}
            size="sm"
            borderRadius="10px"
            alt="sender profile picture"
            mb="1vh"
          />
          <Text fontSize="12px" color="gray.500">
            {name}
          </Text>
        </HStack>
        <Text fontSize="14px">{message}</Text>
        <Text textAlign="right" fontSize="10px" color="gray.400">
          {time}
        </Text>
      </Flex>
    </Box>
  );
};

export default MessageCard;
