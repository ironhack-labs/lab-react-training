// import React from "react";
import './StyleClikable.css'
import { useState } from 'react';

const ClickablePicture = (props) => {
    const [img, setImgClicked ] = useState(false) ;
    console.log("the img", img)

    const toggleClick= () => {
        setImgClicked(!img ? true : false )
    };

    return(
        <div className="ClickablePicture" onClick={toggleClick}>
            {img ? 
                <img  src={props.img} alt="icon-profile"/>
            :   <img  src={props.setImgClicked} alt="icon-glasses"/>
            }
        </div>
    )
};

export default ClickablePicture;