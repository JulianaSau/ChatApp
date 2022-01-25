import {
  Avatar,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  MenuItem,
  Button,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";
import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { MdArrowDropDown } from "react-icons/md";
import useAuth from "../../../utils/useAuth";
import ProfileModal from "../../Profile/ProfileModal";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const { getUser, removeUser } = useAuth();
  const user = getUser();
  console.log(user);

  const logoutHandler = () => {
    removeUser();
    navigate("/");
  };

  return (
    <Flex height="8vh" my="auto" alignItems="center">
      <SearchBar alignSelf="center" />
      <Spacer />
      <Menu>
        <MenuButton
          alignItems="center"
          mr="2vw"
          as={Button}
          rightIcon={<MdArrowDropDown />}
        >
          <Avatar
            src={user.profile_pic}
            alt="user profile picture"
            mt="0.8vh"
            size="sm"
            alignSelf="center"
            name={user.name}
          />
        </MenuButton>
        <MenuList>
          <ProfileModal user={user}>
            <MenuItem>My Profile</MenuItem>
          </ProfileModal>
          <MenuDivider />
          <MenuItem onClick={logoutHandler}>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default TopBar;
