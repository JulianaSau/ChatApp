import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const CreateGroupChatModal = ({ onClose, isOpen }) => {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Group Chat</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <FormControl>
              <FormLabel>Group Name</FormLabel>
              <Input placeholder="Search user by name or email" />
            </FormControl>
            <FormControl>
              <FormLabel>Group Description</FormLabel>
              <Input placeholder="Search user by name or email" />
            </FormControl>
            <FormControl>
              <FormLabel>Search User</FormLabel>
              <Input placeholder="Search user by name or email" />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateGroupChatModal;
