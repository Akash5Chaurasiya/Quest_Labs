import React, { useEffect, useState } from 'react'
import image from '../../../assets/AssetIndex'
import axios from 'axios'
import Card from '../../Card'
import useFetchData from '../../CustomHooks/useFetchData'
import TopTabBar from '../TopTabbar'
const User = () => {
    const { loading, data, cardData, badge } = useFetchData();
    const containerStyle = {
        marginTop: '40px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        width: '300px',
        height: '100vh',
        position: 'relative',
    };
    const imageStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        position: 'absolute',
        top: '-50px',
        left: '35%',
    };
    if (loading) {
        return <div>Loading....</div>
    }
    return (
        <div style={{ flex: 1, backgroundColor: '#4f46e5', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            <div style={{ color: 'white', fontSize: '20px', margin: '20px' }}>
                Profile
            </div>
            <div style={containerStyle}>
                {/* Circular image on the border line */}
                <img
                    src={data.image}
                    style={imageStyle}
                    alt="Circular Image"
                />
                {/* White-colored box content goes here */}
                <div>
                    <h2 style={{ textAlign: 'center', marginTop: '45px' }}>{data.name}</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                    <Card points={cardData.points} type={'Points'} />
                    <Card points={`#${cardData.position}`} type={'Rank'} />
                    <Card points={cardData.level} type={'Level'} />
                </div>
                <div style={{ alignItems: 'center', justifyContent: 'space-evenly', marginTop: '15px' }}>
                    <TopTabBar badge={badge} />
                </div>
            </div>
        </div>
    )
}

export default User