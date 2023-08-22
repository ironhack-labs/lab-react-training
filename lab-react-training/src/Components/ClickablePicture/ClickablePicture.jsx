import React, { useState } from 'react';
import './ClickablePicture.css';
import glasses from '../../assets/maxence-glasses.png';
import character from '../../assets/maxence.png';

const ClickablePicture = () => {
    const [picture, setPicture] = useState(false);

    const handlePicture = () => {
        setPicture(!picture);
    };

    return (
        <div className='ClickablePicture' onClick={handlePicture}>
            <img src={picture ? glasses : character} alt="Clickable Picture" />
        </div>
    );
};

export default ClickablePicture;
