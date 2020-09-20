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
            <div className="Greetings-iteration">
                <p>{greetings[`${props.lang}`]} , {props.children}</p>
            </div>
        )
}