import {
  Box,
  HStack,
  Text,
  Avatar,
  Icon,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import chatIcon from "../../assets/images/avatar.jpeg";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import ChannelDetailsModal from "../ChannelDetailsModal/ChannelDetailsModal";

const ChatHeader = ({ chatName }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Box d="flex" width="76vw" bg="#70058F" height="44px">
        <HStack
          _hover={{ cursor: "pointer" }}
          alignItems="center"
          align="left"
          pl="1.5vw"
          mt="1vh"
          onClick={() => onOpen()}
        >
          <Avatar
            src={chatIcon}
            alt="image of group chat"
            size="sm"
            borderRadius="50px"
          />
          <Text textColor="white">{chatName}</Text>
        </HStack>
        <Spacer />
        <Icon
          as={BiDotsVerticalRounded}
          color="white"
          h={6}
          w={6}
          alignSelf="center"
        />
      </Box>
      <ChannelDetailsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ChatHeader;
