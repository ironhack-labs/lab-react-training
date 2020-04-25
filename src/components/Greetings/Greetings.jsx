import React from 'react'

const checklang = (lang) => {
    if (lang === "de") {
        return "Hallo"
    } else {
        return "Bonjour"
    }
}

export default function Greetings(props) {
    return (
        <div>
            <h2>{checklang(props.lang)} {props.children}</h2>
        </div>
    )
}
