import { useState } from "react"

export default function Carousel({images}) {
    
    const [photoNum, setPhotoNum] = useState(0)

    function handleClick(action) {
        if(action === "next" && photoNum === 3){
            setPhotoNum(0)
        } else if (action === "next") {
            setPhotoNum(photoNum + 1)
        }else if (action === "previous" && photoNum === 0){
            setPhotoNum(3)
        } else if (action === "previous") {
            setPhotoNum(photoNum - 1)
        }
    }
    return(
        <>
        <img src={images[photoNum]}alt=""></img>
        <div>
            <button onClick={()=> handleClick("previous")}>Previous image</button>
            <button onClick={()=> handleClick("next")}>Next image</button>
        </div>
        </>
    )
}