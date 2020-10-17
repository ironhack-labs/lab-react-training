import React from 'react'

export default function Greetings(props) {
    const checkLanguage = (lang) => {
        if(lang === "de") {
            return "Hallo"
        } else if(lang === "en") {
            return "Hello"
        } else if(lang === "es") {
            return "Hola"
        } else if(lang === "fr") {
            return "Bonjour"
        }
    } 
    console.log(props)
    return (
        <div>
            <p>{checkLanguage(props.lang)} {props.children}</p>
        </div>
    )
}
