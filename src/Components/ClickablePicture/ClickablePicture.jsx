import './ClickablePicture.css'
import imageone from '../../assets/images/maxence.png'
import imagetwo from '../../assets/images/maxence-glasses.png'
import { useState } from 'react'

const ClickablePicture = () => {

    const [clicked, setClicked] = useState(false)

    const switchClick = () => {
        setClicked(!clicked)
    }

    let imagesource = clicked ? imagetwo : imageone


    return (

        <div>
            <img src={imagesource} alt="" onClick={switchClick} />
        </div>
    )

}


export default ClickablePicture


