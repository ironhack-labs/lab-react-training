import React from 'react'

export default function Greetings(props) {
    console.log(props)

    function greetingByLanguage(props){
        if(props.lang === 'de') {
            return 'Hallo'
        } else if (props.lang === 'en') {
           return 'Hello'
        } else if (props.lang === 'es') {
           return 'Hola'
        } else if (props.lang === 'fr') {
            return 'Bonjour'
        }
    }


    return (

        <div>
            <p> {greetingByLanguage(props)} {props.children}</p>
        </div>
    )
}
