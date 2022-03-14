//jshint esversion:8
import React, { useState } from "react";

export const ClickablePicture = ({ img, imgClicked }) => {

    let [image, setImage] = useState(img);
    
    let imageClick = () => {
        if (image === img) {
            return setImage(image = imgClicked);
        } else {
            return setImage(image = img);
        }
    };
    
    return (
        <img onClick={imageClick} src={image} alt="Cool pic" />
    );
};