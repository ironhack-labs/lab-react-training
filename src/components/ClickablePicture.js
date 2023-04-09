import { useState } from "react"

function ClickablePicture(props){
    const {img, imgClicked} = props
    const [image, setImage] = useState(img)

    let toggleImg = ()=>image === img ? setImage(imgClicked):setImage(img)

    return (
        <div>
            <img  onClick={()=>toggleImg()} src={image}/>
        </div>
    )
}
export default ClickablePicture