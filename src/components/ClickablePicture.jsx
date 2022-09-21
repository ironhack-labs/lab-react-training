import { useState } from 'react'

function CrickablePicture({img, imgClicked}){
    const [image, setImage] = useState(img)
    const toggle = () => {
        setImage(image === img ? imgClicked : img)
    }
    return (
        <img onClick={toggle} src={image}/>
    )
}

export default CrickablePicture