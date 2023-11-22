import React, { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {
    const [isClicked, setIsClicked] = useState(false)

    const handleImg = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div className='ClickablePicture' onClick={handleImg}>
            <img src={isClicked ? imgClicked : img} alt="cambio de imagen" />
        </div>
    )
}

export default ClickablePicture