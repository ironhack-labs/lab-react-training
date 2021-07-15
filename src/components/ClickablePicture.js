import React, { useState } from 'react';

function ClickablePicture({img, imgClicked}) {
    const [ currentImage, setCurrentImage ] = useState(img)

    const imageChanger = () => {
        setCurrentImage(currentImage === img ? imgClicked : img);
    }

    return (
        <div>
            <img src={currentImage} onClick={imageChanger} alt="Random dude"></img>
        </div>
    )
}

export default ClickablePicture;
