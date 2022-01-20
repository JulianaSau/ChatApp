import { Flex } from "@chakra-ui/react";
import React from "react";
// import Header from "../components/PageSections/Header";
import SideBar from "../components/PageSections/SideBar";
import TopBar from "../components/PageSections/TopBar/TopBar";
import ChatsPanel from "../components/PageSections/ChatsPanel";
import MessageBoard from "../components/Messages/MessageBoard";

const Chats = () => {
  return (
    <Flex>
      <ChatsPanel />
      <SideBar />
      <Flex flexDir="column">
        <TopBar />
        <MessageBoard />
      </Flex>
    </Flex>
  );
};

export default Chats;
