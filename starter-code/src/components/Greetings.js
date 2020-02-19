import React from 'react'

const Greeatings = (props) => {
    
    let greetings

    // eslint-disable-next-line default-case
    switch (props.lang) {
        case "de":
            greetings = "Hallo"
            break;

        case "fr":
            greetings = "Salut"
            break;

        case "es":
            greetings = "Que onda"
            break;

         case "en":
            greetings = "Hello"
            break;
    }
    return (
        <div className="lenguage">
            <h3> {greetings} {props.children} </h3>
        </div>

    )
}

export default Greeatings