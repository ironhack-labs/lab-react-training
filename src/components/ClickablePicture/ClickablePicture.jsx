import { useState } from "react"

function ClickablePicture(props){
    const { picture, pictureWithGlasses } =props
    const [ imageState, setImageState ] = useState(false)
    const changePictureState = () =>{
        setImageState(!imageState)
    }
    return(
        <div>
         {imageState === false && <img onClick={()=>changePictureState()} src={picture}/>}
         {imageState === true && <img onClick={()=>changePictureState()} src={pictureWithGlasses}/>}
        </div>
    )
}

export default ClickablePicture