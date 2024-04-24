import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className='ClickablePicture'>
            <img src={isClicked ? imgClicked : img} onClick={handleClick} alt="Imagen" />
        </div>
    );
}

export default ClickablePicture;
