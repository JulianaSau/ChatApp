import React from "react";
import { Avatar, Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";

const MessageCard = ({ name, time, message, avatar }) => {
  return (
    <Box p="3" m="4" bg="none" width="50%">
      <Flex flexDir="column">
        <Flex alignItems="center">
          <HStack alignItems="center">
            <Avatar
              src={avatar}
              size="sm"
              borderRadius="10px"
              alt="sender profile picture"
              mb="1vh"
            />
            <Text fontSize="12px" fontWeight="semibold">
              {name}
            </Text>
          </HStack>
          <Spacer />
          <Text textAlign="right" fontSize="10px" color="gray.400">
            {time}
          </Text>
        </Flex>
        <Box p="3" shadow="lg" rounded="sm" bg="#F9F5F6">
          <Text fontSize="14px">{message}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default MessageCard;
