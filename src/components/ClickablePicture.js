import React, { useState } from 'react'


function ClickablePicture(props) {
    const { img, imgClicked } = props
    const [showPicture, setShowPicture] = useState(false)

    const toggleShowPicture = () => setShowPicture(!showPicture)

    return (
        <article>

            <h1>ClickablePicture</h1>

            {showPicture ? <img src={img} onClick={toggleShowPicture} /> : <img src={imgClicked} onClick={toggleShowPicture} />}

        </article>
    )
}

export default ClickablePicture