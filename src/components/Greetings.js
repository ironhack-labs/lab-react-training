import React from 'react';
import '../styles/Greetings.css';

function Greetings(props) {
    function language(lang) {
        switch (lang) {
            case "es":
                return "Hola"
            case "gal":
                return "Ola"
        }
    }

    return ( <
        div className = "Greetings" >
        <
        p > {
            language(props.lang)
        } {
            props.children
        } < /p>  < /
        div >
    )
}

export default Greetings;