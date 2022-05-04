import { useState } from 'react'

function ClickablePicture({ img, imgClicked }) {

    const [image, setImage] = useState(true)

    const toggleImages = () => setImage(!image)

    return (
        <div>
            <h1>ClickablePicture</h1>
            <button onClick={toggleImages} >
                <img src={image ? img : imgClicked}></img>
            </button>
        </div>
    )
}

export default ClickablePicture
