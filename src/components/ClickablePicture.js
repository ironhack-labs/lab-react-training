import React, { useState } from 'react'

const ClickablePicture = (props) => {

    const [img, setImg] = useState(props.img);

    const changeImage = () => {
        if(img === props.img)
            setImg(props.imgClicked)
        else
            setImg(props.img)
    }

    return (
        <div>
            <img src={img} alt="" onClick={changeImage}/>
        </div>
    )
}

export default ClickablePicture
