import React from "react";
import photo from "../../assets/images/avatar.jpeg";
import {
  FiChevronDown,
  FiMessageSquare,
  FiHash,
  FiLogOut,
} from "react-icons/fi";
import { MdAddBox, MdAdd } from "react-icons/md";
import {
  Avatar,
  Box,
  HStack,
  Icon,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ChatBox() {
  return (
    <HStack pl="2vw" _hover={{ bg: "#277DFF", cursor: "pointer" }}>
      <Avatar size="xs" src={photo} alt="avatar" />
      <Text color="white" fontSize="12px">
        Group Name
      </Text>
    </HStack>
  );
}

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <Box bg="#70058F" width="18vw">
      <HStack
        height="8vh"
        p={5}
        borderBottomWidth="1px"
        borderBottomColor="#9607BE"
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
        borderBottomColor="#9607BE"
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
          <Spacer />
          <Icon
            _hover={{ cursor: "pointer" }}
            onClick={() => navigate("/dms/dms-browser")}
            as={MdAdd}
            color="white"
          />
        </HStack>
        <ChatBox />
        <HStack pl="2vw" _hover={{ bg: "#277DFF", cursor: "pointer" }}>
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
          <Spacer />
          <Icon
            _hover={{ cursor: "pointer" }}
            onClick={() => navigate("/dms/dms-browser")}
            as={MdAdd}
            color="white"
          />
        </HStack>
        <ChatBox />
        <HStack pl="2vw" _hover={{ bg: "#277DFF", cursor: "pointer" }}>
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
          borderTopColor="#9607BE"
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
