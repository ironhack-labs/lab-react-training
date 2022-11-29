import { useState } from "react"
import './ClickablePicture.css'


const ClickablePicture = (props) => {

    const { img, imgClicked } = props

    const [showGlasses, setShowGlasses] = useState(true)

    const handleShowGlasses = () => setShowGlasses(!showGlasses)



    return (


        <button onClick={handleShowGlasses}>{showGlasses ? < img src={img} /> : < img src={imgClicked} />} </button>


    )

}

export default ClickablePicture
