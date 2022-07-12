import { useState } from 'react'
import './ClickablePicture.css'

const ClickablePicture = ({img, imgClicked}) => {

    const [pictureValue, setPictureValue] = useState(true)

    const tooglePicture = () => {
        setPictureValue(!pictureValue)
    }

    return (
       <img onClick={tooglePicture} src={pictureValue ? imgClicked : img}/>
    )

}

export default ClickablePicture