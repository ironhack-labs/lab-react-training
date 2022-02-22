import { useState } from "react"



function ClickablePicture({ img, imgClicked }) {
    const [showGlasses, setShowGlasses] = useState(false)



    return (
        <img style={{ width: 200 }} src={img} onClick={() => setShowGlasses(!showGlasses)} src={showGlasses ? img : imgClicked} alt='picture' />
    )
}


export default ClickablePicture