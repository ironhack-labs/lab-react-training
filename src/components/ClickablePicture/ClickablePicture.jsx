
import { useState } from "react"

function ClickablePicture(props) {

    const { img, imgClicked } = props
    const [showImg, setShowImg] = useState(true)
    const handleShowImg = () => setShowImg(!showImg)

    return (

        <img src={showImg ? img : imgClicked} onClick={handleShowImg} width="126" height="125" />

    )
}

export default ClickablePicture
