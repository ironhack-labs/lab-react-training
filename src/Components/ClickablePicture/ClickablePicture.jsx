import { useState } from "react"
import imgOne from './../../assets/images/maxence.png'
import imgTwo from './../../assets/images/maxence-glasses.png'

const ClickablePicture = () => {

    const [imgValue, setImgValue] = useState(true)

    const toggleImg = () => {
        setImgValue(!imgValue)
    }


    return (
        <div className="clickablePicture">
            <>

            <img onClick={toggleImg} src={imgValue ? imgOne : imgTwo} alt="pic" />
        </>
        </div>
    )
}

export default ClickablePicture
