import React, { useState } from 'react'

const ClickablePicture = (props) => {
    const [isClicked, setIsClicked] = useState(false)

    const changeImg = () => {
        setIsClicked(!isClicked)
    }
    
    return(
        <div>
            <img
            src={isClicked ? props.imgClicked : props.img}
            alt="clickable-img"
            onClick={changeImg}
            />
        </div>
    )
}

export default ClickablePicture