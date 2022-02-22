import React from "react";
import './ClickablePicture.css';

function ClickablePicture() {
    const [imgToggle, setImgToggle] = React.useState(true)
    const imgClick = () => {
        setImgToggle(!imgToggle)
    }
    return (
        <>
            {imgToggle ? <img src='/maxence.png' alt='sin gafas' onClick={imgClick}/> : <img src='/maxence-glasses.png' alt='con gafas' onClick={imgClick} />}
        </>

    )

}
export default ClickablePicture