import React, {useState} from 'react';

function ClickablePicture({img, imgClicked}){
    const [currentImage, setCurrentImage] = useState(img);

    const imgChanger = () =>{
        setCurrentImage(currentImage === img ? imgClicked : img);
    }

    return (
        <div>
            <img src={currentImage} onClick={imgChanger} alt="Random dude"></img>
        </div>
    )
}

export default ClickablePicture