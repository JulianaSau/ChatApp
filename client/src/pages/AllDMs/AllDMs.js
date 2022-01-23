import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import TopBar from "../../components/PageSections/TopBar/TopBar";
import ChatsPanel from "../../components/PageSections/ChatsPanel";
import React from "react";
import DMCard from "./DMCard";
import CreateDmModal from "../../components/Chats/CreateDmModal";

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
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Flex>
        <ChatsPanel />
        <Flex flexDir="column" width="100%">
          <TopBar />
          <Box className="AllDMs" width="100%" height="92vh">
            <AllDMsHeader />
            <HStack px="1.5vw" py="1vh">
              <Input placeholder="Search for a conversation or user..." />
              <Spacer />
              <Button px="3vw" onClick={onOpen}>
                Create New DM
              </Button>
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
      <CreateDmModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AllDMs;
