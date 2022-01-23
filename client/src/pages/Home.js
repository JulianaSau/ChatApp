import React from "react";
import bg from "../assets/images/bg-large.png";
import cards from "../assets/images/HomePage Cards.png";
import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const buttonStyle = {
  height: "35px",
  fontSize: "14px",
  color: "white",
  width: "15vw",
  fontWeight: "light",
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box height="200vh">
      <Box>
        <Image
          width="100%"
          height="90vh"
          src={bg}
          alt="background"
          objectFit="cover"
          position="absolute"
          top={0}
        />
      </Box>
      <Flex mx="5vw" pt="2vh">
        <Text zIndex="10" color="white" fontWeight="500" fontSize="30px">
          Labrynth
        </Text>
        <Spacer />
        <HStack spacing="10px">
          <Button
            {...buttonStyle}
            bg="#AC08D9"
            onClick={() => navigate("/login")}
          >
            {" "}
            Login{" "}
          </Button>
          <Button
            {...buttonStyle}
            bg="none"
            borderColor="#AC08D9"
            borderWidth="2px"
            onClick={() => navigate("/signup")}
          >
            SignUp
          </Button>
        </HStack>
      </Flex>
      <Flex position="absolute" top={130} left={50} flexDir="column">
        <Text
          lineHeight="80px"
          color="white"
          fontWeight="500"
          fontSize={["30px", "30px", "50px", "70px"]}
          width="38vw"
        >
          Welcome to the Community
        </Text>
        <Text color="white" width="40vw" mt="2vh" fontSize="14px">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </Text>
        <Button
          mt="2vh"
          {...buttonStyle}
          bg="#277DFF"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </Button>
      </Flex>
      <Image
        position="absolute"
        top={120}
        right={30}
        src={cards}
        alt="homecards"
      />
      <Box>hello</Box>
    </Box>
  );
};

export default Home;
