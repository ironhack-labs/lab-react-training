import React from 'react'
import { useState } from 'react'
// import testImage from '../assets/images/maxence.png'

export const ClickablePicture = ({img, imgClicked}) => {

    const [sunglasses, setSunglasses] = useState(false);
    const clickHandler = () => setSunglasses((sunglasses => !sunglasses))

    return (
        <img src={ sunglasses ? imgClicked :img } onClick={clickHandler} alt="img" />
    )
}
