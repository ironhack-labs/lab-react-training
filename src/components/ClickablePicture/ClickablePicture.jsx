import image from '../../assets/maxence.png'
import imgageClicked from '../../assets/maxence-glasses.png'

import { useState } from 'react'
import './ClickablePicture.css'

const ClickablePicture = () => {

    const [status, setStatus] = useState(true)

    const changeStatus = () => setStatus(!status)

    return (
        <figure>
            <img className='clickPic' onClick={changeStatus} src={status ? image : imgageClicked} alt="" />
        </figure>
    )
}

export default ClickablePicture