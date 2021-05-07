import React from 'react';

export default function Greetings(props) {
    if (props.lang === "de") {
        return (
            <div className="box">
                Hallo {props.children}
            </div>
        )
    }
    if (props.lang === "en") {
        return (
            <div className="box">
                Hello {props.children}
            </div>
        )
    }
    if (props.lang === "es") {
        return (
            <div className="box">
                Hola {props.children}
            </div>
        )
    }
    if (props.lang === "fr") {
        return (
            <div className="box">
                Bonjour {props.children}
            </div>
        )
    }
    if (props.lang === "") {
        return (
            <div className="box">
                
            </div>
        )
    }
}