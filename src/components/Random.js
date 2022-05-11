import React from "react"
import "./styles.css"

const Random = (props) => {
    
    const { min, max } = props
    
    return (
        <div>

<p>{`Random Value Between ${min} and ${max}: ${Math.floor(Math.random() * (max - min)) + min}`}</p>
        
       
        </div>
    )
    
    }
    
    export default Random;
    
    