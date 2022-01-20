import { Avatar, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import image from "../../../assets/images/avatar.jpeg";

const TopBar = () => {
  return (
    <Flex height="8vh" my="auto">
      <SearchBar alignSelf="center" />
      <Spacer />
      <Avatar src={image} alt="user profile picture" mr="2vw" mt="0.8vh" />
    </Flex>
  );
};

export default TopBar;
