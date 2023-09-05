import React, {useState} from "react";

const ClickablePicture = ({img, imgClicked}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleImageClick = () => {
        setIsClicked((prevState) => !prevState);
    };

    return (
        <img
            src={isClicked ? imgClicked : img}
            alt="Clickable"
            onClick={handleImageClick}
            style={{cursor: 'pointer'}}
        />
    );

};

export default ClickablePicture;