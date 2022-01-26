import { Avatar, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import React from "react";
import "./SelectedUserTag.css";

const SelectedUserTag = ({ selectedUser, onClose }) => {
  return (
    <Tag size="lg" colorScheme="red" borderRadius="full">
      <Avatar
        src={selectedUser.profile_pic}
        size="xs"
        name={selectedUser.name}
        ml={-1}
        mr={2}
      />
      <TagLabel>{selectedUser.name}</TagLabel>
      <TagCloseButton />
    </Tag>
  );
};

export default SelectedUserTag;
