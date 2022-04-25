import { Flex, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SideBar from "../components/PageSections/SideBar";
import TopBar from "../components/PageSections/TopBar/TopBar";
import ChatsPanel from "../components/PageSections/ChatsPanel";
import MessageBoard from "../components/MessageBoard/MessageBoard";
import axios from "axios";
import useAuth from "../utils/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllChats } from "../redux/appActions/chatActions";

const HomePage = ({ fetchAgain }) => {
  const { getUser, token } = useAuth();
  const user = getUser();
  const [loggedUser, setLoggedUser] = useState();
  const [chats, setChats] = useState();

  // const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

  const toast = useToast();
  const dispatch = useDispatch();

  const fetchChats = async () => {
    console.log(user._id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get("/api/chat", config);
      setChats(data);
      console.log(data);
      localStorage.setItem("AllChats", JSON.stringify(data));
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  const allChats = useSelector((state) => state.chats); // setting the value of product Reducer to the data fetched from the api
  useEffect(() => {
    dispatch(handleGetAllChats());
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
    setChats(allChats);
    console.log(allChats);
    // eslint-disable-next-line
  }, [fetchAgain]);

  return (
    <Flex>
      <ChatsPanel chats={chats} setChats={setChats} />
      <SideBar chats={chats} setChats={setChats} loggedUser={loggedUser} />
      <Flex flexDir="column">
        <TopBar />
        <MessageBoard chats={chats} setChats={setChats} />
      </Flex>
    </Flex>
  );
};

export default HomePage;
