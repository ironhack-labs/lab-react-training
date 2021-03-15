import React from 'react'
import "../styles/Greeting.css"

const Greeting = (props) => {

    console.log(props)

    function lang(lang) {
        if (lang === "fr") return "Bonjour"
        if (lang === "de") return "Hallo"
        if (lang === "en") return "Hello"
        if (lang === "es") return "Hola"
        return "Bonjour"
    }

    return (
        <div className="box__greeting">
            <h2 className="greeting">{lang(props.lang)} {props.children}</h2>
        </div>
    )
}

export default Greeting
