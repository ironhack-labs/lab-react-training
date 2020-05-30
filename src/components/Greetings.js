import React from 'react';

function Greetings(props){
    if (props.lang === "de"){
        return (
            <div className="black-outline-boxes">
                <p>Hallo {props.children}</p>
            </div>
        )
    }

    if (props.lang === "en"){
        return (
            <div className="black-outline-boxes">
                <p>Hello {props.children}</p>
            </div>
        )
    }

    if (props.lang === "es"){
        return (
            <div className="black-outline-boxes">
                <p>Hola {props.children}</p>
            </div>
        )
    }

    if (props.lang === "fr"){
        return (
            <div className="black-outline-boxes">
                <p>Bonjour {props.children}</p>
            </div>
        )
    }
}

export default Greetings;