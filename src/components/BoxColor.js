import React from "react"
import "./styles.css"

const BoxColor = (props) => {
    
    var { r, g, b } = props
    
    return (
        <section className="iteration-4-main">
         <div className="iteration-4-box" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
         <p>rgb({r},{g},{b})</p>
         
         </div>  

        </section>
    )
    
    }
    
    export default BoxColor;
    
    