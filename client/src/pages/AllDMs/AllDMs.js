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
// import axios from "axios";

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
  // const accessChat = async (userId) => {
  //   console.log(userId);

  //   try {
  //     setLoadingChat(true);
  //     const config = {
  //       headers: {
  //         "Content-type": "application/json",
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     };
  //     const { data } = await axios.post(`/api/chat`, { userId }, config);

  //     if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
  //     setSelectedChat(data);
  //     setLoadingChat(false);
  //     onClose();
  //   } catch (error) {
  //     toast({
  //       title: "Error fetching the chat",
  //       description: error.message,
  //       status: "error",
  //       duration: 5000,
  //       isClosable: true,
  //       position: "bottom-left",
  //     });
  //   }
  // };
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
              <Button px="3vw">Create New DM</Button>
            </HStack>
            <Flex flexDir="column" className="DMs-Container" py="1.5rem">
              <Text pl="1.5rem" py="1vh" fontWeight="semibold">
                Today
              </Text>
              <DMCard
              // handleClick={() =>accessChat(chat)}
              />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default AllDMs;
