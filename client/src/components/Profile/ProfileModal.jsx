import React from "react";
import {
  Avatar,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          d={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
        ></IconButton>
      )}
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Avatar
              src={user?.profile_pic}
              name={user?.name}
              width="100%"
              height="4%"
              borderRadius="5px"
            />
            <Text>UserName: {user?.name}</Text>
            <Text>Email: {user?.email}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
