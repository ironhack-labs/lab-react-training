// 1 Importaciones
import React from "react"

//2 Exportacion de funcion

//boxColor
const BoxColor = ({r, g, b}) => {
    const divStyle ={
        // backgroundColor: 'blue',
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        
    };

    
    return (
        <div className="box" style={divStyle}>
            Box BoxColor
        </div>
    )
}

export default BoxColor
