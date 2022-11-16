import React from 'react'
import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {

    const [picture, setPicture] = useState(img);


    return (
        <img src={`/${picture}`} alt="picture" onClick={() => {
            picture === imgClicked ? setPicture(img) : setPicture(imgClicked);
          }} />
    )
}

export default ClickablePicture;
