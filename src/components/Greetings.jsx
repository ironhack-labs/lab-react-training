import React from 'react'

const Greetings = (props) => {
    function greeting(expr){
        if (expr === 'de'){return "Hallo"}
        else if (expr === 'en'){return "Hello"}
        else if (expr === 'es'){return "Hola"}
        else if (expr === 'fr'){return "Bonjour"}
        else {return ""}
    }
    return (
        <div className="Greetings">
            <p lang={props.lang}> {greeting(props.lang)} {props.children}</p>
        </div>
    )
}

export default Greetings
