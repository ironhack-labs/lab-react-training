import React from 'react';
import { useState } from 'react';
import App from '../App';


export default function ClickablePicture(props) {

    const [imgClicked, setClicked] = useState(false);

    const glassHandler = () => setClicked(!imgClicked)

    const imgs = [
        props.img,
        props.clickedImg
    ];

    return (
        <div>
            {
                imgClicked ? 
                <img src={imgs[0]} onClick={glassHandler} alt="maxence"/> :
                <img src={imgs[1]} alt="maxence with glasses" onClick={glassHandler}/>
            }
        </div>
    )
}
