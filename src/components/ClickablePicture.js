import { useState } from "react";

function ClickablePicture({img,imgClicked}){
    

    const[active,setActive]= useState(false)

    const handleClickActive =()=>{
        setActive((previousImage) =>{
            return !previousImage
        });

   }

    return(

      <div>
        {active ? 
        (<img src={img} onClick={handleClickActive}></img>):
        (<img src={imgClicked} onClick={handleClickActive}> </img>)
        }            
    </div>
    )


}

export default ClickablePicture