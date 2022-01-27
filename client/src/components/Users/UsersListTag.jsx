import { HStack, Image, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const UsersListTag = ({
  loading,
  loadingChat,
  handleFunction,
  searchResult,
  user,
}) => {
  return (
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
          <Text>{user.name}</Text>
          <Text color="#c4c4c4">{user.email}</Text>
        </HStack>
      </HStack>
    </ListItem>
  );
};

export default UsersListTag;
