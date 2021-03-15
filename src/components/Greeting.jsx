import React from 'react'

const Greeting = (props) => {
    if (props.lang === "de") {
        return (
            <div>
            Hallo {props.children}
            </div>
        )
    }
    if (props.lang === "fr") {
        return (
            <div>
            Bonjour {props.children}
            </div>
        )
    }
    if (props.lang === "en") {
        return (
            <div>
            Hello {props.children}
            </div>
        )
    }
    if (props.lang === "es") {
        return (
            <div>
            Ola {props.children}
            </div>
        )
    }
}

export default Greeting
