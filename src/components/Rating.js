import React from "react"
import "./styles.css"

const Rating = (props) => {
    
    var { children } = props

    return (
        <div>
        {children < .9 ? <p>☆☆☆☆☆</p> 
        : children < 1.9 ? <p>★☆☆☆☆</p>
        : children < 2.9 ? <p>★★☆☆☆</p>
        : children < 3.9 ? <p>★★★☆☆</p>
        : children < 4.9 ? <p>★★★★☆</p>
        : children >= 4.9 ? <p>★★★★★</p>
        : <div></div>}    
        </div>
        
    )
    
    }
    
    export default Rating;
    
    