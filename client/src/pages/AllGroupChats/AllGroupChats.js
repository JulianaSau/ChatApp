import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ChatsPanel from "../../components/PageSections/ChatsPanel";
import TopBar from "../../components/PageSections/TopBar/TopBar";
import GroupChatCard from "./GroupChatCard";

const AllGroupChatsHeader = () => {
  return (
    <Box width="100%" bg="#70058F" height="44px">
      <Text
        pl="1.5vw"
        py="1.5vh"
        textAlign="left"
        align="center"
        textColor="white"
      >
        Group Chats
      </Text>
    </Box>
  );
};

const AllGroupChats = () => {
  return (
    <Flex>
      <ChatsPanel />
      <Flex flexDir="column" width="100%">
        <TopBar />
        <Box className="AllDMs" width="100%" height="92vh">
          <AllGroupChatsHeader />
          <HStack px="1.5vw" py="1vh">
            <Input placeholder="Search for a conversation or user..." />
            <Spacer />
            <Button px="3vw">Create New Group Chat</Button>
          </HStack>
          <Flex flexDir="column" className="DMs-Container" py="1.5rem">
            <Text pl="1.5rem" py="1vh" fontWeight="semibold">
              Today
            </Text>
            <GroupChatCard />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AllGroupChats;
