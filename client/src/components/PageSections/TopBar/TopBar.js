import { Box } from "@chakra-ui/react";
import React from "react";
import SearchBar from "./SearchBar/SearchBar";

const TopBar = () => {
  return (
    <Box height="8vh" my="auto">
      <SearchBar alignSelf="center" />
    </Box>
  );
};

export default TopBar;
