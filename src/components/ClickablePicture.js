import React, { useState } from 'react';
import WithSunglasses from '../assets/images/maxence-glasses.png'
import NoSunglasses from '../assets/images/maxence.png'

export default function ClickablePicture() {

    const [sunglasses, setSunglasses] = useState(false)
    const clickHandler = () =>

        setSunglasses((sunglasses => !sunglasses))

    return (
         <img src={ sunglasses ? WithSunglasses : NoSunglasses } onClick={clickHandler} />
    )
}
