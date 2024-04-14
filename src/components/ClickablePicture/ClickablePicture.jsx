import { useState } from "react";
import "./ClickablePicture.css"

function ClickablePicture ({img, imgClicked}){

    const [isClicked, setIsClicked] = useState(false)

    const handleIsClicked = () => {
        setIsClicked( prevState => !prevState)

    }

    return (

      <div className="position-relative">
        <img
         className="imgClickable"
         role="button"
         onClick={handleIsClicked}
         src ={imgClicked}>
        </img>    
        <img
        className={ `imgGlass ${isClicked ? "displayNone" : ""}`}
         role="img"
         src ={img}>  
         </img>
       </div>
    )

}
export default ClickablePicture