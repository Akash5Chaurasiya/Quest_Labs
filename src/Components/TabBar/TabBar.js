// TabBar.js
import React, { useState } from 'react';
import { FaBeer, FaCoffee, FaCode } from "react-icons/fa";
import './TabBar.css'; // Import the CSS file for styling
import { AiFillHome, AiOutlineSearch, AiFillShopping, AiOutlineUser } from "react-icons/ai";
import Home from './Screens/Home';
import Search from './Screens/Search';
import Store from './Screens/Store';
import User from './Screens/User';
const TabBar = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    const renderTabContent = () => {
        switch (activeTab) {
            case 1:
                return <Home />;
            case 2:
                return <Search />;
            case 3:
                return <Store />;
            case 4:
                return <User />;
            default:
                return null;
        }
    };
    return (
        <div>
            {renderTabContent()}
            <div className="tab-container">
                <a href="#" onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
                    <AiFillHome color={activeTab === 1 ? "#0a0a0a" : '#71717a'} size={30} />
                </a>
                <a href="#" onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
                    <AiOutlineSearch color={activeTab === 2 ? "#0a0a0a" : '#71717a'} size={30} />
                </a>
                <a href="#" onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''}>
                    <AiFillShopping color={activeTab === 3 ? "#0a0a0a" : '#71717a'} size={30} />
                </a>
                <a href="#" onClick={() => handleTabClick(4)} className={activeTab === 4 ? 'active' : ''}>
                    <AiOutlineUser color={activeTab === 4 ? "#0a0a0a" : '#71717a'} size={30} />
                </a>
            </div>
        </div>
    );
};

export default TabBar;
