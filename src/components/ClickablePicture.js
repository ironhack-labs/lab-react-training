import { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {

    const [firstImage, setFirstImage] = useState(true)

    const toggleImage = () => setFirstImage(!firstImage)

    const imgStyle = {
        cursor: 'pointer'
    }

    const backImg = <img style={imgStyle} src={img} onClick={toggleImage} />
    const newBackImg = <img style={imgStyle} src={imgClicked} onClick={toggleImage} />

    return (
        <section>
            {firstImage ? backImg : newBackImg}
        </section>
    )

}

export default ClickablePicture