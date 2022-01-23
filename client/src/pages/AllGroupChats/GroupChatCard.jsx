import React from "react";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Spacer,
  Text,
  Icon,
} from "@chakra-ui/react";
import chatIcon from "../../assets/images/avatar.jpeg";
import { motion } from "framer-motion";
import { MdCheckCircle, MdLock } from "react-icons/md";

const GroupChatCard = () => {
  const MotionBox = motion(Box);

  return (
    <MotionBox
      borderTopWidth="1px"
      borderTopColor="gray.300"
      borderBottomWidth="1px"
      borderBottomColor="gray.300"
      py="4vh"
      whileHover={{
        scale: 1.01,
        // borderBottomColor: "none",
        // borderTopColor: "none",
      }}
    >
      <HStack pl="1.5rem">
        <Avatar src={chatIcon} alt="chat Icon" size="lg" />
        <Flex flexDir="column">
          <HStack align="left">
            <Text fontWeight="semibold">Test Group Chat</Text>
            <Text color="gray.400">300 members</Text>
            <HStack>
              <Icon as={MdLock} />
              <Text color="gray.400">Private</Text>
            </HStack>
            <HStack>
              <Icon as={MdCheckCircle} color="green.400" />
              <Text color="green.400">You are a member</Text>
            </HStack>
          </HStack>
          <HStack align="left">
            <Box width="80vw">
              <Flex>
                <Text fontWeight="semibold" fontSize="0.9em">
                  Sarah Matthews:
                </Text>
                <Text ml="5px" fontSize="0.9em">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sit placerat tincidunt arcucursus
                </Text>
              </Flex>
            </Box>
            <Spacer />
            <Text color="gray.400">1:30 PM</Text>
          </HStack>
        </Flex>
      </HStack>
    </MotionBox>
  );
};

export default GroupChatCard;
