import { useState } from "react";


export const LikeButton =() =>{    

    const [likes,setLikes]= useState(0)
    const backgroundColors = ['purple','blue','green','yellow','orange','red','purple','blue','green','yellow','orange','red']


    

    const handlerClick = (e) =>{
setLikes((prevState)=>prevState+1)
console.log(likes)
    }

    const handlerUnClick = (e) =>{
        setLikes((prevState)=>prevState-1)
        
            }
        

console.log(likes)
    
    return(


    <div >
    <h1>Iteración 8</h1>
<button style={{color:'red'}} onClick={(e)=>{handlerUnClick(e)}} >Unlike</button>

<button style={{background:backgroundColors[likes]}} onClick={(e)=>{handlerClick(e)}} >{likes} likes</button>


    </div>)
}




