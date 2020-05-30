import React from 'react'

const checklang = (lang) => {
    if (lang === "de") {
        return "Hallo"
    } else {
        return "Bonjour"
    }
}

const Greetings = (props) => (
    <h2>{checklang(props.lang)} {props.children}</h2>
)

export default Greetings;