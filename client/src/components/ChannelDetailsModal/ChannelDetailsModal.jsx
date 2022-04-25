import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import UsersListTag from "../Users/UsersListTag";

const ChannelDetailsModal = ({ isOpen, onClose }) => {
  const selectedChat = useSelector((state) => state.chats).selectedChat;
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{selectedChat.chatName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Details</Tab>
              <Tab>Members</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text>Chat Name</Text>
                <Text>Description</Text>
                <Text>Topic</Text>
              </TabPanel>
              <TabPanel>
                <Button width="100%" textAlign="left" height="8vh">
                  Add Members
                </Button>
                <Text>MemberList</Text>
                <List px={6} py={4}>
                  <Box as="span">{"   "}</Box>
                  {selectedChat.length > 0 ? (
                    <>
                      {selectedChat.users.map((user) => {
                        return <UsersListTag key={user._id} user={user} />;
                      })}
                    </>
                  ) : (
                    <Text>Error</Text>
                  )}
                </List>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter>
          <Button>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ChannelDetailsModal;
