import React from 'react'
import '../assets/css/BoxColor.css'


const BoxColor = ({r,g,b})=>{
    

        return (
            <div className = "color"  style={{ backgroundColor: `rgb(${r},${g},${b})`}}>
                <p>rgb ({r},{g},{b}) </p>
            </div>
        )
    

}

export default BoxColor
