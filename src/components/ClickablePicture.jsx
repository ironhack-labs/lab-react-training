import "../styles/ClickablePicture.css"
import { useState } from "react"

function ClickablePicture(props) {
    const [pictureId, setPictureId] = useState(0)
    const myPics = [props.img, props.imgClicked]
    return(
        <div className="ClickablePicture">
            <img onClick={() => {
                if(pictureId===0) {
                    setPictureId(1)
                }
                else {
                    setPictureId(0)
                }
            }} src={myPics[pictureId]} alt='output' />
        </div>
    )
}

export default ClickablePicture