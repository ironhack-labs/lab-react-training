import { useState } from 'react'
function ClickablePicture({img, imgClicked}){


    const [image, setImage] = useState(img)

    const changeImage = () => {
        setImage(image === img ? imgClicked : img)
    }

    return (
        <div>
           <img src={image} alt="pic1" onClick={changeImage} />
        </div>

    )
}


export default ClickablePicture