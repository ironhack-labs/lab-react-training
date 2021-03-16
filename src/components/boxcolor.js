import React from 'react'
import './boxcolor.css';


const BoxColor = ({r,g,b}) => { 
let boxColor = `rgb(${r},${g},${b})`
return ( 
    <div className='box-color' style={{backgroundColor:`${boxColor}`}}> 
    {boxColor}

    </div>
)


}


export default BoxColor;