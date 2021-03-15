import React from 'react'

function Greetings(props) {
if(props.lang ==="fr") {
    return <p>bonjour {props.children}</p>
} else if(props.lang === "en") {
    return <p>Hello {props.children}</p>
} else if(props.lang === "de") {
    return <p>Hallo {props.children}</p>
} else {
    return (
        <div className="Greetings">
            <p>Whats up{props.children}</p>
        </div>
    )

}

}

export default Greetings


