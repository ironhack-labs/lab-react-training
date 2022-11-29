import './ClickablePicture.css'
import { useState } from 'react'

const ClickablePicture = ({img, imgClicked}) => {

    const [hasGlasses, setHasGlasses] = useState(false)

    const changePicture = () => {
        setHasGlasses(!hasGlasses)
    }

    const picture = hasGlasses ? `${img}` : `${imgClicked}`

    return (

           <img onClick={changePicture} className='maxPicture' src={picture} alt="picture" />       

        )
}

export default ClickablePicture