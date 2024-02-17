import React, { useState } from 'react';
import './TopTabBar.css';
import MemberShip from '../Badges/MemberShip';
import Badge from '../Badges/Badge';
import Point from '../Badges/Point';
import useDimensions from '../CustomHooks/useDimension';

const TopTabBar = ({ badge }) => {
    const [activeTopTab, setActiveTopTab] = useState(1);
    const { windowHeight, windowWidth } = useDimensions();
    const handleTabClick = (tabNumber) => {
        setActiveTopTab(tabNumber);
    };
    const renderTabContent = () => {
        switch (activeTopTab) {
            case 1:
                return (<div><MemberShip /> </div>)
            case 2:
                return (<Badge badge={badge} />);
            case 3:
                return <Point />;
            default:
                return null;
        }
    };
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a href="#" style={{}} onClick={() => handleTabClick(1)} className={activeTopTab === 1 ? 'active' : ''}>
                    Membership
                </a>
                <a href="#" style={{ marginRight: '10px', marginLeft: '10px' }} onClick={() => handleTabClick(2)} className={activeTopTab === 2 ? 'active' : ''}>
                    Badges
                </a>
                <a href="#" style={{}} onClick={() => handleTabClick(3)} className={activeTopTab === 3 ? 'active' : ''}>
                    Point&nbsp;History
                </a>
            </div>
            {renderTabContent()}
        </div>
    );
};

export default TopTabBar;
