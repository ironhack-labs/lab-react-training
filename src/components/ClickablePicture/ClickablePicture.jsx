import './ClickablePicture.css'
import pictureWhitGlasses from '../../assets/images/maxence-glasses.png'
import picture from '../../assets/images/maxence.png'
import { useState } from 'react'

const ClickablePicture = () => {

    const [defaultPict, setPict] = useState(picture)
    const pictureHandler = () => {
        setPict(!defaultPict)
    }

    return (
        <img onClick={pictureHandler} src={defaultPict ? picture : pictureWhitGlasses} alt="img" />
    )

}
export default ClickablePicture