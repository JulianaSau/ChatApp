import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MessageBoard from "./components/MessageBoard/MessageBoard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AllDMs from "./pages/AllDMs/AllDMs";
import AllGroupChats from "./pages/AllGroupChats/AllGroupChats";
import NotFound from "./pages/ErrorPage/NotFound";
import HomePage from "./pages/Home";
// import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/message-board" element={<MessageBoard />} />
      <Route path="/dms/dms-browser" element={<AllDMs />} />
      <Route path="/groups/group-browser" element={<AllGroupChats />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
