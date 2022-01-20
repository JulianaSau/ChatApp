import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import MessageBoard from './components/Messages/MessageBoard';
import Login from "./pages/Login"
import SignUp from './pages/SignUp';
import Chats from './pages/Chats';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/message-board" element={<MessageBoard />} />
    </Routes>
  );
}

export default App;
