import React from 'react';
import './Greetings.css';

export default function Greetings(props) {
        const  greetings = {
            de: 'Hallo',
            fr: 'Bonjour',
            es: 'Hola',
            en: 'Hello'
        }

        return (
            <p>{greetings[`${props.lang}`]} , {props.children}</p>
        )
}