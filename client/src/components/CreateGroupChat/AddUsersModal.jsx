import {
  Button,
  Container,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import SelectedUserTag from "./SelectedUserTag";
import SearchUsersDropdown from "./SearchUsersDropdown";
import useAuth from "../../utils/useAuth";

const AddUsersModal = ({ onClose, isOpen }) => {
  const { getUser } = useAuth();
  const user = getUser();
  console.log(user);
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
            <Input placeholder="Search user by name or email"></Input>
            <Button>Search</Button>
          </HStack>

          <SearchUsersDropdown />
          {/* <Container>
            <SelectedUserTag selectedUser={user} />
          </Container> */}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Create DM</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddUsersModal;
