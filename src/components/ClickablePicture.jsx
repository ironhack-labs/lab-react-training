import { useState } from "react";

const ClickablePicture = (props) => {
    
    const [ image, setImage ] = useState(props.img)

    const handleImg = () => {
        if(image === props.img){
            setImage(props.imgClicked)
        }else{
            setImage(props.img)
        }
    }
    return(
        <div>
            <img className="image-glass" src={image} alt="" onClick={handleImg}></img>
        </div>
    )
}

export default ClickablePicture;