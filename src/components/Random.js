// components // Random.js
// 1 Importaciones
import React from "react"

//2 Exportacion de funcion

//Random
const Random = ({min, max}) => {
    
    let randomNum = Math.floor(Math.random() * (max - min)) + min;

    return (
        <div className="box">
            Random value between {min} and {max} = {randomNum}
        </div>
    )
}

export default Random
  
