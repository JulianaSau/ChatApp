import { Avatar, Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import chatIcon from "../../assets/images/avatar.jpeg";
import React from "react";
import { motion } from "framer-motion";

const DMCard = ({ handleClick }) => {
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
      onClick={handleClick}
    >
      <HStack pl="1.5rem">
        <Avatar src={chatIcon} alt="chat Icon" size="lg" />
        <Flex flexDir="column">
          <HStack align="left">
            <Text fontWeight="semibold">Sarah Matthews</Text>
            <Spacer />
            <Text color="gray.400">1:30 PM</Text>
          </HStack>
          <Box width="80vw">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sit placerat tincidunt arcucursus
            </Text>
          </Box>
        </Flex>
      </HStack>
    </MotionBox>
  );
};

export default DMCard;
