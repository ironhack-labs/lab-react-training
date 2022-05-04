import { useState } from 'react'

function ClickablePicture({ img, imgClicked }) {
    const [showImg, setshowImg] = useState(true)

    const toggleImg = () => setshowImg(!showImg)

    return (
        <button onClick={toggleImg}><img src={showImg ? img : imgClicked}></img></button>
    )
}

export default ClickablePicture;