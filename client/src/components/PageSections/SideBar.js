import React from "react";
import photo from "../../assets/images/avatar.jpeg";
import {
  FiChevronDown,
  FiMessageSquare,
  FiHash,
  FiLogOut,
} from "react-icons/fi";
import { MdAddBox, MdAdd } from "react-icons/md";
import {
  Avatar,
  Box,
  HStack,
  Icon,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CreateGroupChatModal from "../CreateGroupChat/CreateGroupChatModal";
import useAuth from "../../utils/useAuth";
import { getSender } from "../../config/ChatsLogics";
import ChatLoading from "../Chats/ChatLoading";
import { useSelector, useDispatch } from "react-redux";
import { handleSelectedChat } from "../../redux/appActions/chatActions";

function ChatBox({ chat, loggedUser }) {
  const dispatch = useDispatch();
  return (
    <HStack
      pl="2vw"
      py={1}
      _hover={{ bg: "#277DFF", cursor: "pointer" }}
      onClick={() => dispatch(handleSelectedChat(chat))}
    >
      <Avatar size="xs" src={photo} alt="avatar" />
      <Text color="white" fontSize="12px">
        {!chat.isGroupChat ? getSender(loggedUser, chat.users) : chat.chatName}
      </Text>
    </HStack>
  );
}

const SideBar = ({ loggedUser }) => {
  const navigate = useNavigate();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { getUser } = useAuth();
  const user = getUser();
  const chats = useSelector((state) => state.chats).allChats;
  const selectedChat = useSelector((state) => state.chats).selectedChat;
  console.log("selected Chat", selectedChat);

  console.log("chats", chats);

  return (
    <>
      <Box
        bg="#70058F"
        width="18vw"
        display={["none", "none", "block", "block"]}
      >
        <HStack
          height="8vh"
          p={5}
          borderBottomWidth="1px"
          borderBottomColor="#9607BE"
        >
          <Text color="white" fontSize="20px" fontWeight="semi-bold">
            KodeCamp
          </Text>
          <Icon as={FiChevronDown} color="white" />
        </HStack>
        <HStack
          height="10vh"
          p={5}
          borderBottomWidth="1px"
          borderBottomColor="#9607BE"
        >
          <Avatar src={user.profile_pic} alt="user profile pic" size="md" />
          <VStack align="left" spacing>
            <Text color="white" fontSize="13px" isTruncated>
              Username: {user.name}
            </Text>
            <Text
              color="white"
              fontSize="11px"
              textOverflow="ellipsis"
              isTruncated
            >
              Status: active
            </Text>
          </VStack>
        </HStack>
        <VStack align="left" p={5}>
          <HStack>
            <Text color="white">Messaging</Text>
            <Icon as={FiChevronDown} color="white" />
          </HStack>
          <HStack>
            <Icon as={FiHash} color="white" />
            <Text color="white" fontSize="13px">
              {" "}
              Group Chats
            </Text>
            <Icon as={FiChevronDown} color="white" />
            <Spacer />
            <Icon
              _hover={{ cursor: "pointer" }}
              onClick={() => navigate("/groups/group-browser")}
              as={MdAdd}
              color="white"
            />
          </HStack>
          {chats ? (
            <Box>
              {chats
                ?.filter((chat) => chat.isGroupChat === true)
                .map((chat) => (
                  <ChatBox key={chat._id} chat={chat} loggedUser={loggedUser} />
                ))}
            </Box>
          ) : (
            <ChatLoading />
          )}
          <HStack
            pl="2vw"
            _hover={{ bg: "#277DFF", cursor: "pointer" }}
            onClick={() => onOpen()}
          >
            <Icon as={MdAddBox} color="white" />
            <Text color="white" fontSize="12px">
              Start New Group Chat
            </Text>
          </HStack>
          <HStack>
            <Icon as={FiMessageSquare} color="white" />
            <Text color="white" fontSize="13px">
              {" "}
              Direct Messages
            </Text>
            <Icon as={FiChevronDown} color="white" />
            <Spacer />
            <Icon
              _hover={{ cursor: "pointer" }}
              onClick={() => navigate("/dms/dms-browser")}
              as={MdAdd}
              color="white"
            />
          </HStack>
          {chats ? (
            <Box>
              {chats
                ?.filter((chat) => chat.isGroupChat === false)
                .map((chat) => (
                  <ChatBox key={chat._id} chat={chat} loggedUser={loggedUser} />
                ))}
            </Box>
          ) : (
            <ChatLoading />
          )}
          <HStack
            pl="2vw"
            _hover={{ bg: "#277DFF", cursor: "pointer" }}
            onClick={() => navigate("/dms/dms-browser")}
          >
            <Icon as={MdAddBox} color="white" />
            <Text color="white" fontSize="12px">
              Start New DM
            </Text>
          </HStack>
          <HStack
            position="absolute"
            top="90vh"
            height="6vh"
            p={5}
            borderTopWidth="1px"
            borderTopColor="#9607BE"
          >
            <Icon as={FiLogOut} color="white" />
            <Text color="white" fontWeight="semi-bold">
              Sign Out
            </Text>
          </HStack>
        </VStack>
      </Box>
      <CreateGroupChatModal onCloseModal={onClose} isOpenModal={isOpen} />
    </>
  );
};

export default SideBar;
