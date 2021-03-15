import React from 'react'

const Greetings = (props) => {
    if (props.lang === "de") {
        return (
            <section>
                <b>Hallo</b> {props.children}
            </section>
        )
    }
    else if (props.lang === "fr") {
        return (
            <section>
                <b>Bonjour</b> {props.children}
            </section>
        )
    }
    else if (props.lang === "en") {
        return (
            <section>
                <b>Hello</b> {props.children}
            </section>
        )
    }
    else if (props.lang === "es") {
        return (
            <section>
                <b>hola</b> {props.children}
            </section>
        )
    }
}

export default Greetings


