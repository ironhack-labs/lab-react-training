import { useState } from "react"
const ClickablePicture = ({ img, imgClicked }) => {

    const [gafas, setGafas] = useState(false)

    const clicked = () => {
        setGafas(!gafas)
    }

    return (
        <div className="ClickablePicture" onClick={clicked}>

            <img src={gafas ? imgClicked : img} alt="" />

        </div>
    )

}

export default ClickablePicture