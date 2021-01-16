import React from 'react';
import style from './Greetings.module.css';

function greet(lang) {
    switch (lang) {
        case "de":
            return "Hallo";
        case "fr":
            return "Bonjour";
        case "en":
            return "Hello";
        case "es":
            return "Hola";
        default: return '';
    }
}

function Greetings(props) {
    return (
        <h2 className={style.greeting}>
            {greet(props.lang)} {props.children}
        </h2>
    )
}

export default Greetings;