import { useState } from "react";

function Dice(){

   

    const [face, setClick] = useState(0)

      let random 
     let source = `./images/dice${face}.png`    
     if(face==0){
         source = `./images/dice-empty.png` 
     }     
     const setFace=()=>{
          
        setClick((state)=> state = 0)

         setTimeout(() => { 
             random = Math.floor(Math.random() * (6 - 1) + 1)
             setClick((state) => state = random )},
             1000)
     }
        
    return (
        <img src={source} onClick={() => setFace() } />
    )

}

export default Dice