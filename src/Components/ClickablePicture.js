import { useState } from "react"



function ClickablePicture(props) {

    const { img, imgClicked } = props
    let [imageSrc, setImageSrc] = useState(img)

    function putGlasses() {
        let newSrc
        imageSrc === img ? newSrc = imgClicked : newSrc = img
        setImageSrc(newSrc)
    }
    return (
        <article>
            <img alt="" src={imageSrc} onClick={putGlasses} />
        </article>
    )


}


export default ClickablePicture