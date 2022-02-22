import { useState } from "react"

const ClickablePicture = (props) => {

    const { img, imgClicked } = props

    const [showImage, setShowImage] = useState(false)

    const toggleImage = () => setShowImage(!showImage)

    return (

        <figure>
            <img style={{width: 400}} src={img} onClick={toggleImage} src={showImage ? img : imgClicked} alt="profile with glasses" ></img>
        </figure>
    )
}



export default ClickablePicture