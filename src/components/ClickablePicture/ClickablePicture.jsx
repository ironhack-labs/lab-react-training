import '../App.css'
import { useState } from "react"
import maxence from './../../assets/images/maxence-glasses.png'
import maxenceGlasses from './../../assets/images/maxence.png'

const ClickablePicture = () => {

    const [glassesOn, setglassesOn] = useState(false)

    const switchLook = () => {
        setglassesOn(!glassesOn)
    }

    let imgSource = glassesOn ? maxence : maxenceGlasses

    return (
        <>
            <img className="ClickablePicture" src={imgSource} alt="Maxence" onClick={switchLook} />
        </>
    )
}


export default ClickablePicture