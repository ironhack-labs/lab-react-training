import React, { useState } from "react";
import "./ClickablePicture.css";

const ClickablePicture = ( {img, imgClicked} ) => {
    const [picture, setPicture] = useState(img);

    const handlePictureChange = () => {
        if (picture === img) {
            setPicture(imgClicked);
        } else {
            setPicture(img);
        };
    };

    return <button className="clickable-picture" onClick={handlePictureChange}><img src={picture} alt="clickable" /></button>
};

export default ClickablePicture;