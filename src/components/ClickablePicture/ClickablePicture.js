import { useState } from "react"



function ClickablePicture({img, imgClicked}) {

    const [showPicture, setShowPicture] = useState(false)

    const changePicture = () => setShowPicture(!showPicture)

    return (
        <div>
            <button onClick={changePicture}>{showPicture ? <img src={img}/> : <img src={imgClicked}/>}</button>
        </div>
    )

}

export default ClickablePicture