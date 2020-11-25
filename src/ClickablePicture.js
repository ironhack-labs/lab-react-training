import React, {useState} from 'react'

const ClickablePicture = ({img, imgClicked}) => {
    const [image, setImage] = useState(img)
    function changeImg() {
        if (image === img) {
            setImage(imgClicked)
        } else {
            setImage(img)
        }
    }
    return (
        <div>
            <img src={image} alt="" onClick={changeImg}/>
        </div>
    )
}

export default ClickablePicture
