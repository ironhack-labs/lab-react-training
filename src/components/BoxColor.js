import React from 'react';
import '../assets/css/BoxColor.css'

const BoxColor = ({r,g,b}) =>  {

    return(
        <div className="BoxColor" style={{ backgroundColor: `rgb(${r},${g},${b})`}}>
            <h4>{`rgb(${r},${g},${b})`}</h4>
        </div>
    )
}
 
export default BoxColor;