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
import { getUser } from "../../../utils/useToken";
import ProfileModal from "../../Profile/ProfileModal";

const TopBar = () => {
  const user = getUser();
  console.log(user);

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
          <MenuItem>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default TopBar;
