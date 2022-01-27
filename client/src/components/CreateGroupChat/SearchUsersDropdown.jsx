import React from "react";
import {
  Box,
  List,
  ListItem,
  Image,
  HStack,
  Text,
  Spinner,
} from "@chakra-ui/react";
// import image from "../../assets/images/avatar.jpeg";
import ChatLoading from "../Chats/ChatLoading";

const SearchUsersDropdown = ({
  loading,
  loadingChat,
  handleFunction,
  searchResult,
}) => {
  return (
    <Box
      shadow="lg"
      overflowY="scroll"
      maxH="lg"
      borderTopWidth="1.9px"
      borderTopColor="gray.100"
      borderTopRadius="2px"
      borderBottomRadius="10px"
      zIndex={1000}
      width="inherit"
      bg="white"
      // position="absolute"
      // top="8.25vh"
      // left="29.4vw"
    >
      <>
        <List px={6} py={4}>
          <Box as="span">{"   "}</Box>
          {loading ? (
            <ChatLoading />
          ) : (
            searchResult?.map((user) => (
              <ListItem
                _hover={{
                  cursor: "pointer",
                  bg: "#24A8FF",
                  borderRadius: "5px",
                  color: "white",
                }}
                _focus={{ bg: "#24A8FF", borderRadius: "5px", color: "white" }}
                onClick={handleFunction}
                padding="5px"
                key={user._id}
              >
                <HStack>
                  <Image
                    objectFit="cover"
                    borderRadius="5px"
                    h="30px"
                    w="30px"
                    src={user.profile_pic}
                  />
                  <HStack>
                    <Text color="#c4c4c4">{user.name}</Text>
                    <Text>{user.email}</Text>
                  </HStack>
                </HStack>
              </ListItem>
            ))
          )}
          {loadingChat && <Spinner ml="auto" d="flex" />}
        </List>
      </>
    </Box>
  );
};

export default SearchUsersDropdown;
