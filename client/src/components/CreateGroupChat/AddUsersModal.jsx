import {
  Box,
  Button,
  HStack,
  Input,
  List,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SelectedUserTag from "./SelectedUserTag";
import useAuth from "../../utils/useAuth";
import axios from "axios";
import ChatLoading from "../Chats/ChatLoading";
import UsersListTag from "../Users/UsersListTag";

const AddUsersModal = ({ onClose, isOpen, groupChatName }) => {
  const { getUser, token, chats, setChats } = useAuth();
  const user = getUser();
  // console.log(user);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const [selectedChat, setSelectedChat] = useState();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loadingChat, setLoadingChat] = useState(false);

  const handleSelectedUsers = (userToAdd) => {
    if (selectedUsers.includes(userToAdd)) {
      toast({
        title: "User already added",
        status: "warning",
        duration: 50,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setSelectedUsers([...selectedUsers, userToAdd]);
  };

  const handleDelete = (delUser) => {
    setSelectedUsers(selectedUsers.filter((sel) => sel._id !== delUser._id));
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const handleSubmit = async () => {
    if (!groupChatName || !selectedUsers) {
      toast({
        title: "Please fill all the feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        `/api/chat/group`,
        {
          name: groupChatName,
          users: JSON.stringify(selectedUsers.map((user) => user._id)),
        },
        config
      );
      setChats([data, ...chats]);
      onClose();
      toast({
        title: "New Group Chat Created!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error) {
      toast({
        title: "Failed to Create the Chat!",
        description: error.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Users</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack>
            <Input
              placeholder="Search user by name or email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></Input>
            <Button onClick={handleSearch}>Search</Button>
          </HStack>
          <Box w="100%" d="flex" flexWrap="wrap" p={3}>
            {selectedUsers.map((user) => (
              <SelectedUserTag
                selectedUser={user}
                handleFunction={() => handleDelete(user)}
              />
            ))}
          </Box>
          {searchResult && (
            <List px={6} py={4}>
              <Box as="span">{"   "}</Box>
              {loading ? (
                <ChatLoading />
              ) : (
                searchResult?.map((user) => (
                  <UsersListTag
                    key={user._id}
                    user={user}
                    handleFunction={() => handleSelectedUsers(user)}
                  />
                ))
              )}
              {loadingChat && <Spinner ml="auto" d="flex" />}
            </List>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={handleSubmit}>
            Create DM
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddUsersModal;
