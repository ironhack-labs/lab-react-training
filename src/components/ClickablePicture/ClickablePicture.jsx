import { useState } from "react"

const ClickablePicture = (props) => {
    const { img, imgClicked } = props

    const [image, setImage] = useState(img)

    const changeImage = () => setImage(!image)

    return (
        <div onClick={changeImage}>
            <img src={image ? img : imgClicked} alt="imagen" />
        </div>
    )

}
export default ClickablePicture