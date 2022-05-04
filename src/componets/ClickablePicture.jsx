import { useState } from 'react'


const ClickablePicture = ({ img, imgClicked }) => {
    const image1 = img
    const image2 = imgClicked
    const [image, setImg] = useState(image1)

    return (<div>
        <img src={image} alt={image} onClick={() => setImg(image2)} ></img>
    </div>)

}

export default ClickablePicture