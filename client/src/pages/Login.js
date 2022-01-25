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
  FormHelperText,
  Icon,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import photo from "../assets/images/image.jpg";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useAuth from "../utils/useAuth";
import useForm from "../utils/useForm";

const style = {
  color: "red",
};

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();
  const {
    handleSubmit,
    handleChange,
    data: user,
    errors,
  } = useForm({
    validations: {
      email: {
        pattern: {
          value: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
          message: "Please enter a valid email address",
        },
      },
      password: {
        custom: {
          isValid: (value) => value.length > 6,
          message: "The password needs to be at least 6 characters long.",
        },
      },
    },

    onSubmit: async () => {
      setLoading(true);
      if (!user.email || !user.password) {
        toast({
          title: errors.email || errors.password,
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        return;
      }

      // console.log(email, password);
      try {
        const config = {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        };

        const loginDetails = {
          email: user.email,
          password: user.password,
        };

        const { data } = await axios.post(
          "/api/user/login",
          loginDetails,
          config
        );

        console.log(JSON.stringify(data));
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setToken(data);
        setLoading(false);
        navigate("/home");
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    },
  });

  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      bg="#F9F5F6"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              borderColor="gray.300"
              type="email"
              value={user.email || "" || email}
              placeholder="Enter your Email Address"
              onChange={handleChange("email")}
            />
            {errors.email && (
              <FormHelperText {...style}>{errors.email}</FormHelperText>
            )}
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                borderColor="gray.300"
                type={show ? "text" : "password"}
                value={user.password || "" || password}
                placeholder="Enter your password"
                onChange={handleChange("password")}
              />
              <InputRightElement>
                {show ? (
                  <Icon as={FiEyeOff} onClick={() => handleClick()} />
                ) : (
                  <Icon as={FiEye} onClick={() => handleClick()} />
                )}
              </InputRightElement>
            </InputGroup>
            {errors.password && (
              <FormHelperText {...style}>{errors.password}</FormHelperText>
            )}
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={["center", "start"]}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color="#AC08D9">Forgot password?</Link>
            </Stack>
            <Button
              bg="#AC08D9"
              variant={"solid"}
              color="white"
              onClick={handleSubmit}
              isLoading={loading}
              isDisabled={!user.password || !user.email}
            >
              Sign in
            </Button>
            <Button
              variant="solid"
              colorScheme="red"
              width="100%"
              onClick={() => {
                setEmail("guest@example.com");
                setPassword("123456789");
                user.email = "guest@example.com";
                user.password = "123456789";
                console.log(user.email, user.password);
                handleSubmit();
              }}
            >
              Log In as Guest User
            </Button>
            <Link
              to="/signup"
              alignSelf="center"
              color="#AC08D9"
              onClick={() => navigate("/signup")}
            >
              Dont have an account? Sign up
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          display={["none", "none", "block", "block"]}
          src={
            // 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            photo
          }
        />
      </Flex>
    </Stack>
  );
};

export default Login;
