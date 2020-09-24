import React from 'react';
import './components.css';

const hello = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour'
};

const Greeting = (props) => {
    const { lang, children } = props;
    return (
        <div className="box">
            {`${hello[lang]} ${children}`}
        </div>
    );
};

export default Greeting;