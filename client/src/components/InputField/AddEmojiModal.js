import { Box, Button, Container, Text } from "@chakra-ui/react";
// import EmojiPicker from "emoji-picker-react";
import React from "react";

const AddEmojiModal = ({ onOpen, onEmojiClick }) => {
  return (
    <Container
      boxShadow="-1px 4px 7px rgba(0, 0, 0, 0.1)"
      bg="#F9F9F9"
      textAlign="left"
      maxWidth="300px"
      style={{ position: "absolute", top: "10rem", right: "2rem" }}
    >
      {/* <EmojiPicker
        pickerStyle={{
          width: "300px",
          height: 300,
          Searchbar: {
            borderRadius: 20,
          },
          fontSize: 10,
        }}
        onEmojiClick={onEmojiClick}
      /> */}
      <Container p="18px" alignSelf="center">
        <Text
          alignItems="center"
          mt="10px"
          mb="10px"
          fontSize="18px"
          color="#8B8B8B"
          fontWeight="600"
        >
          Frequently Used
        </Text>
        <Box>
          <Button
            mt="10px"
            color="#8B8B8B"
            fontSize="18px"
            p="7px 11px"
            border="1px solid #8B8B8B"
            borderRadius="3px"
            boxSizing="border-box"
            bg="white"
            onClick={onOpen}
          >
            Add Emoji
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

export default AddEmojiModal;
