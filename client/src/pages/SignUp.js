import React, { useRef, useState } from "react";
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
  Icon,
  Avatar,
  AvatarBadge,
  IconButton,
  VisuallyHidden,
  FormHelperText,
} from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import photo from "../assets/images/image.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import useForm from "../utils/useForm";
import useAuth from "../utils/useAuth";

const style = {
  color: "red",
};

const SignUp = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { setToken } = useAuth();
  const inputFile = useRef(null);

  const [show, setShow] = useState(false);
  const [profile_pic, setProfile_pic] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const handleClick = () => setShow(!show);
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  const photoUploadToCloudinary = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics); //file to upload
      data.append("upload_preset", "MeChatApp"); //cloudinaryupload preset name
      data.append("cloud_name", "trillestbrunette");
      fetch("https://api.cloudinary.com/v1_1/trillestbrunette/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setProfile_pic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };

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
      setPicLoading(true);
      if (
        !user.name ||
        !user.email ||
        !user.password ||
        !user.confirmPassword
      ) {
        toast({
          title: "Please Fill all the Fields",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setPicLoading(false);
        return;
      }
      if (user.password !== user.confirmPassword) {
        toast({
          title: "Passwords Do Not Match",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setPicLoading(false);
        return;
      }
      console.log(user.name, user.email, user.password, profile_pic);
      try {
        const config = {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        };

        const signUpDetails = {
          name: user.name,
          email: user.email,
          password: user.password,
          profile_pic,
        };

        const { data } = await axios.post("/api/user", signUpDetails, config);
        console.log(data);
        toast({
          title: "Registration Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setToken(data);
        setPicLoading(false);
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
        setPicLoading(false);
      }
    },
  });

  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      bg="#F9F5F6"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"} bg="#F9F5F6">
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign up to start chatting</Heading>
          <FormControl id="username" align="center">
            <FormLabel alignSelf="center">
              Upload your Profile Picture
            </FormLabel>
            <Avatar size="2xl" src={profile_pic}>
              <AvatarBadge
                as={IconButton}
                onClick={onButtonClick}
                size="sm"
                rounded="full"
                bottom="20px"
                colorScheme="blue"
                aria-label="remove Image"
                icon={<BiImageAdd color="#fff" />}
              />
            </Avatar>
            <VisuallyHidden>
              <Input
                type="file"
                id="file"
                ref={inputFile}
                placeholder="Choose your profile pic"
                accept="image/*"
                onChange={(e) => photoUploadToCloudinary(e.target.files[0])}
              />
            </VisuallyHidden>
          </FormControl>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={user.name || ""}
              placeholder="Enter Your Name"
              onChange={handleChange("name")}
            />
            {errors.name && (
              <FormHelperText {...style}>{errors.name}</FormHelperText>
            )}
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={user.email || ""}
              placeholder="Enter Your Email Address"
              onChange={handleChange("email")}
            />
            {errors.email && (
              <FormHelperText {...style}>{errors.email}</FormHelperText>
            )}
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                value={user.password || ""}
                placeholder="Enter Your Password"
                onChange={handleChange("password")}
              />
              {errors.password && (
                <FormHelperText {...style}>{errors.password}</FormHelperText>
              )}
              <InputRightElement>
                {show ? (
                  <Icon as={FiEyeOff} onClick={() => handleClick()} />
                ) : (
                  <Icon as={FiEye} onClick={() => handleClick()} />
                )}
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id="confirmPassword">
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="Confirm Your Password"
                value={user.confirmPassword || ""}
                onChange={handleChange("confirmPassword")}
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
            <Checkbox>
              By checking the box, are agreeing to our terms and conditions
            </Checkbox>
            <Button
              isLoading={picLoading}
              onClick={handleSubmit}
              isDisabled={
                !user.name ||
                !user.email ||
                !user.password ||
                !user.confirmPassword
              }
              bg="#AC08D9"
              variant={"solid"}
              color="white"
            >
              Sign in
            </Button>
            <Link
              to="/login"
              alignSelf="center"
              color="#AC08D9"
              onClick={() => navigate("/login")}
            >
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
