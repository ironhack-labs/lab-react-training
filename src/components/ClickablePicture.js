import { useState } from "react";

function ClickablePicture({img,imgClick}){
    
 
    const[active,setActive]= useState(false)

    const handleClickActive =()=>{
        !active ? setActive(true) : setActive(false)
      
        };


    return(
        <div>
       <img src={!active ? img : imgClick} onClick={handleClickActive} ></img>
        </div>
    )


}

export default ClickablePicture