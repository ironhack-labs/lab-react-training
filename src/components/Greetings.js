import React from 'react'

export default function Greetings(props) {

    function texto (){

        switch (props.lang){
            case "es":
                return "Hola"
            case "en":
                return "Hello"
            case "fr":
                return "Bonjour"
            case "de":
                return "Hallo"
        }

    }

    return (
        <div className="idCards">
        <p>{texto()} {props.children}</p>

        </div>
    )
}

