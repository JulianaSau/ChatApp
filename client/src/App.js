import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MessageBoard from "./components/Messages/MessageBoard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Chats from "./pages/Chats";
import AllDMs from "./pages/AllDMs/AllDMs";
import AllGroupChats from "./pages/AllGroupChats/AllGroupChats";
import NotFound from "./pages/ErrorPage/NotFound";
// import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/message-board" element={<MessageBoard />} />
      <Route path="/dms/dms-browser" element={<AllDMs />} />
      <Route path="/groups/group-browser" element={<AllGroupChats />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
