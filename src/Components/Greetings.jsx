import React from 'react'

const Greetings = (props) => {

    if (props.lang==="de") {
    return <div>Hallo {props.children}</div>
    };

    if (props.lang ==="fr") {
        return <div>Bonjour {props.children}</div>
    }
}

export default Greetings;