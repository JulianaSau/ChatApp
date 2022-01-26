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
  useDisclosure,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import AddUsersModal from "./AddUsersModal";

const CreateGroupChatModal = ({ onCloseModal, isOpenModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal
        isCentered
        onClose={onCloseModal}
        isOpen={isOpenModal}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Group Chat</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Group Name</FormLabel>
                <Input placeholder="Search user by name or email" />
              </FormControl>
              <FormControl>
                <FormLabel>Group Description</FormLabel>
                <Input placeholder="Search user by name or email" />
              </FormControl>
              <FormControl d="flex" alignItems="center">
                <FormLabel htmlFor="private">Make Private</FormLabel>
                <Switch id="private" />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => {
                onCloseModal();
                onOpen();
              }}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AddUsersModal onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default CreateGroupChatModal;
