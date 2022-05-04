import './ClickablePicture.css'
import { useState } from 'react'


function ClickablePicture({ img, imgClicked }) {

    const [clickablePicture, setClickablePicture] = useState(true)

    const toggleImage = () => setClickablePicture(!clickablePicture)

    return (
        <div className="clickable-picture">
            <img onClick={toggleImage} src={clickablePicture ? img : imgClicked}></img>
        </div>
    );
}

export default ClickablePicture
