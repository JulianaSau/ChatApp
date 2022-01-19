import React from 'react'
import "../../assets/css/Sidebar.css"
import photo from "../../assets/images/avatar.jpeg"



function ChatBox() {
    return (
        <div className='chatbox-container'>
            <img className='chatbox-photo' src={photo} alt="avatar"/>
            <p className='chatbox-name'>Name</p>
        </div>
    )
}


const SideBar = () => {
    return (
        <div className='sidebar-container'>
            <p>Chats</p>
            <ChatBox/>
        </div>
    )
}

export default SideBar
