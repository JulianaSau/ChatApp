import { Avatar, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import React from "react";

const SelectedUserTag = ({ selectedUser, handleFunction }) => {
  return (
    <Tag size="lg" colorScheme="purple" borderRadius="full" m={1}>
      <Avatar
        src={selectedUser.profile_pic}
        size="xs"
        name={selectedUser.name}
        ml={-1}
        mr={2}
      />
      <TagLabel>{selectedUser.name}</TagLabel>
      <TagCloseButton onClick={handleFunction} />
    </Tag>
  );
};

export default SelectedUserTag;
