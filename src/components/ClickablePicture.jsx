import React, { useState }from 'react'

function ClickablePicture({img , imgClicked}) {
    const [picture, setPicture] = useState(true)

    return (
        <div>
            <img src={picture? img: imgClicked} alt="Original" onClick={() => setPicture(!picture)}/>
        </div>
    )
}

export default ClickablePicture