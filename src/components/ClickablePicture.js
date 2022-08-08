import { useState } from "react";

function ClickablePicture({img,imgClick}){
    
    const img1= img;
    const img2=imgClick;
    const together = {img1,img2}


    const[active,setActive]= useState(together.img1)

    const handleClickActive =()=>{
        setActive(together.img2)
      
        };


    return(
        <div>
       <img src={active} onClick={handleClickActive} ></img>
        </div>
    )


}

export default ClickablePicture