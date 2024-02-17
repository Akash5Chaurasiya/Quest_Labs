import React, { useState } from 'react';
import useDimensions from '../CustomHooks/useDimension';
import { AiOutlineClose } from 'react-icons/ai';

const Badge = ({ badge }) => {
    const { windowHeight } = useDimensions();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [name, setName] = useState(null)
    const openModal = (image, id, name) => {
        setSelectedImage(image);
        setSelectedId(id);
        setName(name)
    };
    const closeModal = () => {
        setSelectedImage(null);
        setSelectedId(null);
        setName(null);
    };
    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
            arr.slice(index * size, index * size + size)
        );
    };
    const badgeRows = chunkArray(badge, 3);
    return (
        <div className='scrollbar-hide' style={{ maxHeight: `${windowHeight - 450}px`, overflowY: 'auto', margin: '10px' }}>
            {badgeRows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {row.map((ele) => (
                        <img
                            key={ele.name}
                            style={{ width: '65px', height: '65px', borderRadius: '50%', cursor: 'pointer', margin: '13px' }}
                            src={ele.imageUrl}
                            alt={`Badge ${ele.id}`}
                            onClick={() => openModal(ele.imageUrl, ele.id, ele.name)}
                        />
                    ))}
                </div>
            ))}
            {selectedImage && (
                <div>
                    <div
                        className='modal-backdrop'
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            zIndex: '999',
                            backdropFilter: 'blur(5px)',
                        }}
                        onClick={closeModal}
                    ></div>
                    <div
                        className='modal'
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            zIndex: '1000',
                            color: 'black',
                            width: '80%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <a href='#' onClick={closeModal} style={{ top: 0, right: 0, position: 'absolute', margin: '10px' }}>
                            <AiOutlineClose color='black' size={20} />
                        </a>
                        <img
                            src={selectedImage}
                            alt={`Badge ${selectedId}`}
                            style={{ height: 'auto', borderRadius: '10px', objectFit: 'fill', width: '50%', borderRadius: '50%' }}
                        />
                        <h4 style={{ color: 'black' }}>{name} Badge Unlocked!</h4>
                        <p style={{ color: 'black', margin: 0 }}>Level! Up! Earned a shiny new badge!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Badge;
