import React from "react"
import PropTypes from "prop-types";


function Greetings ({lang, children}){
    let greeting = ""
        if (lang === "de"){
            greeting = "Hallo"
        } else if (lang === "fr"){
            greeting = "Bonjour"
        } else if (lang === "es"){
            greeting = "Hola"
        } else if (lang === "en"){
            greeting = "Hello"
        }
    
    
    return (
        <div className="card-box-2">
        <strong>{greeting} {children}</strong>
    </div>
    )

}


Greetings.propTypes = {
    lang: PropTypes.string,

}


export default Greetings