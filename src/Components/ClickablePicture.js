import React, { useState } from 'react';

function ClickablePicture (props) {
    const [image, setImage] = useState (props.img);

    const handleClick = () => {
        if (image === props.img) {
            setImage(props.imgClicked);
        }
        if (image === props.imgClicked){
            setImage(props.img);
        }
    }


    return (
        <div>
            <img onClick={handleClick} style={{width: '400px'}} src={image} alt="click on the img" />
            </div>
        );
}


export default ClickablePicture