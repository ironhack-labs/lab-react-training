import React from "react";


const BoxColor =({r, g, b}) => {

    var color = `RGB(${r},${g},${b})`

    return(
        <div className="BoxColor" style={{color: 'darkblue', backgroundColor: color }}>
            <h3 style={{color: {color}}}>ici color !!!</h3>
        </div>
    )

}
export default BoxColor