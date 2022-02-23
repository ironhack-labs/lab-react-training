import { useState } from 'react'

const ClickablePicture = (props) => {

    const { img, imgClicked } = props

    let [imgValue, setImgValue] = useState(img)

    return (
        <img src={imgValue} alt='chaval' onClick={() => {
            imgValue === img ? setImgValue(imgValue = imgClicked) : setImgValue(imgValue = img)
        }}></img>
    )

}

export default ClickablePicture