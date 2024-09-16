import { useState } from "react"

export function ClickablePicture({img, imgClicked}){
    const [isImage, setIsImage] = useState(true)
    const changePicture = () => {
          setIsImage(!isImage)
    }
    return(
        <div className="d-flex flex-start">
            {isImage ?  <img onClick={changePicture} className="profile-picture" src={img} style={{cursor: "pointer"}} alt="" /> : <img onClick={changePicture} className="profile-picture" src={imgClicked} style={{cursor: "pointer"}} alt="" />}
        </div>
    )
}