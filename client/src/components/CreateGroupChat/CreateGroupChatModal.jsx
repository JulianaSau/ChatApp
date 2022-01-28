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
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AddUsersModal from "./AddUsersModal";

const CreateGroupChatModal = ({ onCloseModal, isOpenModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [groupChatName, setGroupChatName] = useState("");
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
              <Text>
                A Channel is where one can chat with several people at the same
                time
              </Text>
              <FormControl>
                <FormLabel>Group Name</FormLabel>
                <Input
                  placeholder="Group Name"
                  value={groupChatName}
                  onChange={(e) => setGroupChatName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Group Description</FormLabel>
                <Input placeholder="Group Description" />
              </FormControl>
              <FormControl d="flex" alignItems="center">
                <FormLabel htmlFor="private">Make Channel Private</FormLabel>
                <Switch id="private" />
              </FormControl>
              <Text>
                Please note that it is not possible to change a channel back to
                public if you choose to make it public
              </Text>
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
      <AddUsersModal
        onClose={onClose}
        isOpen={isOpen}
        groupChatName={groupChatName}
      />
    </>
  );
};

export default CreateGroupChatModal;
