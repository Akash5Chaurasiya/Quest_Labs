import React from 'react';

const Card = ({ points, type }) => {
    return (
        <div style={{ border: '1px solid #4f46e5', borderRadius: '10px', backgroundColor: '#4f46e5', width: '90px', height: '95px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h4 style={{ color: 'white', margin: '0' }}>{points}</h4>
            <p style={{ color: 'white', margin: '0' }}>{type}</p>
        </div>
    );
};

export default Card;
