import './ClickablePicture.css'
import { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {

    const [clicked, setClicked] = useState(img)

    const toggle = () => setClicked(!clicked)

    return (
        <div className='ClickablePicture'>
            <img onClick={toggle} src={clicked ? img : imgClicked} />
        </div>
    )
}

export default ClickablePicture