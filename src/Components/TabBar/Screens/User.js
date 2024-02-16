import React, { useEffect, useState } from 'react'
import image from '../../../assets/AssetIndex'
import axios from 'axios'
const User = () => {
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(null)
    console.log(image)
    useEffect(() => {
        fetchData()
    }, [])
    const headers = {
        "userid": "u-a2399489-9cd0-4c94-ad12-568379202b08",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc",
        "apikey": "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
        "entityId": "e-0000000000"
    };
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://staging.questprotocol.xyz/api/users/u-a2399489-9cd0-4c94-ad12-568379202b08', { headers });
            const { imageUrl } = response?.data?.data || {};
            setImage(imageUrl);
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };
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
            <div style={{ color: 'white', fontSize: '20px', marginTop: '20px' }}>
                Profile
            </div>

            <div style={containerStyle}>
                {/* Circular image on the border line */}
                <img
                    src={image}
                    style={imageStyle}
                    alt="Circular Image"
                />
                {/* White-colored box content goes here */}
                This is a white box.
            </div>
        </div>
    )
}

export default User