import React from 'react'
import "../assets/css/Header.css"
import avatar from "../assets/images/avatar.jpeg"

const Header = () => {
    return (
        <div className = "app-header">
            <p className = "header-logo">WeChat</p>
            <div className="search-bar">
               <p className='search-text'>Search Chats</p>
            </div>
            <img className='avatar' src={avatar} alt="avatar"/>
        </div>
    )
}

export default Header
