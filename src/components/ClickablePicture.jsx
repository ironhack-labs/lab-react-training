import { useState } from "react"
import maxence from '../assets/images/maxence.png';
import maxenceGlasses from '../assets/images/maxence-glasses.png';

export const ClickablePicture=()=>{
    
    const [pic,setPic]=useState(maxence)
  const [count, setCount]=useState(0)

const handlerClick =(e)=>{
    setCount((prevState)=>prevState + 1)
    count%2===0?setPic(()=>maxenceGlasses):setPic(()=>maxence)
}

return(

<div>
    <h1>Iteration 9 </h1>
    <img src={pic} onClick={(e) =>{handlerClick(e)}} alt="pic"/>
</div>
)
}