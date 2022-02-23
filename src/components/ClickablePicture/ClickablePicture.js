import './ClickablePicture.css'
import { useState } from "react"


function ClickablePicture({ img, imgClicked }) {


    const [firstImage, changeImage] = useState(img)

    const changePicture = () => {

        if (firstImage === img) {
            changeImage(imgClicked)
        } else if (firstImage === imgClicked) {
            changeImage(img)
        }
    }

    return (
        <section>
            <img src={firstImage} onClick={changePicture} />
        </section>
    )
}


export default ClickablePicture
