import React, { useEffect, useState } from 'react';

const useDimensions = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowHeight(window.innerHeight);
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return { windowHeight, windowWidth };
};
export default useDimensions