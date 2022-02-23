
import { useState } from "react"


const ClickablePicture = (props) => {

    const { img, imgClicked} = props

    const [image, setImg] = useState(img)
    
    return (

        <article>

        <img src={image} alt={img} onClick={() => setImg(imgClicked)} /> 

                        
        </article>

    )

}


export default ClickablePicture