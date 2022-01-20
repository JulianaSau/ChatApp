import React from "react";
import photo from "../../assets/images/avatar.jpeg";
import {
  FiChevronDown,
  FiMessageSquare,
  FiHash,
  FiLogOut,
} from "react-icons/fi";
import { MdAddBox } from "react-icons/md";
import { Avatar, Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";

function ChatBox() {
  return (
    <HStack pl="2vw">
      <Avatar size="xs" src={photo} alt="avatar" />
      <Text color="white" fontSize="12px">
        Group Name
      </Text>
    </HStack>
  );
}

const SideBar = () => {
  return (
    <Box bg="#70058F" width="18vw">
      <HStack
        height="8vh"
        p={5}
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
      >
        <Text color="white" fontSize="20px" fontWeight="semi-bold">
          KodeCamp
        </Text>
        <Icon as={FiChevronDown} color="white" />
      </HStack>
      <HStack
        height="10vh"
        p={5}
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
      >
        <Avatar src={photo} alt="user profile pic" size="md" />
        <VStack align="left" spacing>
          <Text color="white" fontSize="13px" isTruncated>
            Username: jayjay
          </Text>
          <Text
            color="white"
            fontSize="11px"
            textOverflow="ellipsis"
            isTruncated
          >
            Status: active
          </Text>
        </VStack>
      </HStack>
      <VStack align="left" p={5}>
        <HStack>
          <Text color="white">Messaging</Text>
          <Icon as={FiChevronDown} color="white" />
        </HStack>
        <HStack>
          <Icon as={FiHash} color="white" />
          <Text color="white" fontSize="13px">
            {" "}
            Group Chats
          </Text>
          <Icon as={FiChevronDown} color="white" />
        </HStack>
        <ChatBox />
        <HStack pl="2vw">
          <Icon as={MdAddBox} color="white" />
          <Text color="white" fontSize="12px">
            Start New Group Chat
          </Text>
        </HStack>
        <HStack>
          <Icon as={FiMessageSquare} color="white" />
          <Text color="white" fontSize="13px">
            {" "}
            Direct Messages
          </Text>
          <Icon as={FiChevronDown} color="white" />
        </HStack>
        <ChatBox />
        <HStack pl="2vw">
          <Icon as={MdAddBox} color="white" />
          <Text color="white" fontSize="12px">
            Start New DM
          </Text>
        </HStack>
        <HStack
          position="absolute"
          top="90vh"
          height="6vh"
          p={5}
          borderTopWidth="1px"
          borderTopColor="gray.200"
        >
          <Icon as={FiLogOut} color="white" />
          <Text color="white" fontWeight="semi-bold">
            Sign Out
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SideBar;
