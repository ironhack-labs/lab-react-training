import { useState } from "react"
import glasses from '../assets/images/glasses.png'

const ClickablePicture = ({ img, imgClicked }) => {
    const [showGlasses, setShowGlasses] = useState(false)
    const handleClick = () => {
        setShowGlasses(!showGlasses)
    }

    const handleGlassesClick = () => {
        handleClick()
    }

    return(
        <div style = {{ position: "relative", display: "inline-block"}} onClick = {handleClick}>
            <img src = {img} alt ="Photo" 
            style = {{width: "50%" , height: "auto" }}
            />
            {showGlasses && (
                <img src = {imgClicked} alt ="glasses"
                style = {{
                    position: "absolute",
                    top: 50,
                    left: 170,
                    width : "50%",
                    height: "auto",
                    cursor: "pointer"
                }}
                onClick={handleGlassesClick}
                />
            )}     
        </div>
    )
}


export default ClickablePicture