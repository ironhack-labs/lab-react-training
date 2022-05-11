import React from "react"
import "./styles.css"

const Greetings = (props) => {
    
    var { lang, children } = props
    
    return (
        <div>
        {lang === "en" ? `Hello ${children}`  : lang === "fr" ? `Bonjour ${children}`
        : lang === "de" ? `Hallo ${children}` 
        : lang = "es" ? `Hola ${children}`
        : <p></p>}   
        </div>
    )
    
    }
    
    export default Greetings;
    
    