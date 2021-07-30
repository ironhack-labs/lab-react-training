import { useState, useEffect} from "react";

const ClickablePicture = ({imgNormal, imgClicked}) => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        if(clicked){
            setClicked(false)
        } else {
            setClicked(true)
        }
    }

    return (
        <img className = "image" 
        onClick={handleClick}
        src={clicked ? imgClicked : imgNormal}/>
    )
}

export default ClickablePicture;