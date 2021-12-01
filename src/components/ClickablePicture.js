import React from 'react'
import {useState} from 'react'

function ClickablePicture({img, imgClicked}) {

    const [hasSunglasses, setSunglasses] = useState(false);
    const toggleSunglasses = () => setSunglasses(!hasSunglasses)
    return (
        <img src={hasSunglasses ? imgClicked : img} onClick={toggleSunglasses} style={{
            height: '10rem'
        }}/>
    );
}

export default ClickablePicture;