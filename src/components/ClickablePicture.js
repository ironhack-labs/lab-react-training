import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
    const [displayedImg, changeImg] = useState(img);

    const style = {
        cursor: 'pointer'
    }

    return(
        <img 
            style={style}
            src={displayedImg}
            alt='click me'
            onClick={() => changeImg(
                displayedImg === img ? imgClicked : img
            )}
        />
    );
};

export default ClickablePicture;