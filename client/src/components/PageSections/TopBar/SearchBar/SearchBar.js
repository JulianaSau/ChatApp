import React from "react";
import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

const SearchBar = () => {
  return (
    <Flex mt="1.5vh" ml="1.5vw">
      <InputGroup>
        <Input
          borderWidth="1.9px"
          focusBorderColor="blue"
          background="#ffffff"
          borderRadius="5px"
          width="60vw"
          placeholder="Search..."
          size="md"
        />
        <InputRightElement
          pointerEvents="none"
          children={<MdClose color="#fff" />}
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchBar;
