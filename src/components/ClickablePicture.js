import { useState } from "react"

function ClickablePicture(props) {

    const [image, setImage] = useState(props.img)

    const toggleImage = () => {
        (image === props.img) ? setImage(props.imgClicked) : setImage(props.img)
    }

    return (
        <img onClick={() => { toggleImage() }} src={image} />
    )
}


export default ClickablePicture