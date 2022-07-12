import './ClickablePicture.css'
import { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {

    const [image, setImage] = useState(img)
    // const [imageGlasses, setImageGlasses] = useState(imgClicked)

    const togglePictures = () => {
        image === img ? setImage(imgClicked) : setImage(img)
    }

    return (
        <>

            <h1>HOLALAAA</h1>
            <img onClick={togglePictures} src={image}></img>
            {/* <button onClick={togglePictures}>{imageGlasses ? <img src={image} /> : <img src={imageGlasses} alt="pic" />}Cambia</button> */}


        </>
    )
}


export default ClickablePicture