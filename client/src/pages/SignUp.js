import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import photo from "../assets/images/image.jpg";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState();
  const [profile_pic, setProfile_pic] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleClick = () => setShow(!show);

  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      bg="#F9F5F6"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"} bg="#F9F5F6">
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign up to start chatting</Heading>
          <FormControl id="username">
            <FormLabel>Upload your profile Picture</FormLabel>
            <Input
              type="file"
              value={profile_pic}
              placeholder="Choose your profile pic"
              onChange={(e) => setProfile_pic(e.target.value)}
            />
          </FormControl>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              placeholder="Enter Your Name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              placeholder="Enter Your Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                value={password}
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id="confirm-password">
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="Confirm Your Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={6}>
            <Checkbox>
              By checking the box, are agreeing to our terms and conditions
            </Checkbox>
            <Button bg="#AC08D9" variant={"solid"} color="white">
              Sign in
            </Button>
            <Link alignSelf="center" color="#AC08D9">
              Already have an account? Sign in
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            // 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            photo
          }
        />
      </Flex>
    </Stack>
  );
};

export default SignUp;
