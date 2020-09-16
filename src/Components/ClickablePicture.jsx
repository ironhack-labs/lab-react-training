import React, { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {
    let [image, setImage] = useState(img)
    const changeImg = () => setImage(image === img ? imgClicked : img)
    return (
        <div>
            <img onClick={changeImg} src={image} alt="Funny pic" />
        </div>
    )
}

export default ClickablePicture
