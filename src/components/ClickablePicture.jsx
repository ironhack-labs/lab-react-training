import { useState } from "react"

const ClickablePicture = props => {

    const { img, imgClicked } = props

    const [imageValue, setImageValue] = useState()

    const handleCurrentImage = () => setImageValue(!imageValue)

    return (
        <div onClick={handleCurrentImage}>
            <img src={imageValue ? imgClicked : img} alt="image" />
        </div>
    )
}
export default ClickablePicture