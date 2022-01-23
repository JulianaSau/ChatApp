import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import TopBar from "../../components/PageSections/TopBar/TopBar";
import ChatsPanel from "../../components/PageSections/ChatsPanel";
import React from "react";
import DMCard from "./DMCard";

const AllDMsHeader = () => {
  return (
    <Box width="100%" bg="#70058F" height="44px">
      <Text
        pl="1.5vw"
        py="1.5vh"
        textAlign="left"
        align="center"
        textColor="white"
      >
        Direct Messages
      </Text>
    </Box>
  );
};

const AllDMs = () => {
  return (
    <Flex>
      <ChatsPanel />
      <Flex flexDir="column" width="100%">
        <TopBar />
        <Box className="AllDMs" width="100%" height="92vh">
          <AllDMsHeader />
          <HStack px="1.5vw" py="1vh">
            <Input placeholder="Search for a conversation or user..." />
            <Spacer />
            <Button px="3vw">Create New DM</Button>
          </HStack>
          <Flex flexDir="column" className="DMs-Container" py="1.5rem">
            <Text pl="1.5rem" py="1vh" fontWeight="semibold">
              Today
            </Text>
            <DMCard />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AllDMs;
