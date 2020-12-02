import React from 'react';
import './Greetings.css'

const Greetings = (props) => {
    const { lang } = props
    return (
        <div className='greetings'>
        { lang === "de" && <span> Hallo </span> }
        { lang === "en" && <span> Hello </span> }
        { lang === "es" && <span> Hola </span> }
        { lang === "fr" && <span> Bonjour </span> }
        { props.children }
        </div>
    )
}

export default Greetings
