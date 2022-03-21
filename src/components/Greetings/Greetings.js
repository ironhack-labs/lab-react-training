import React from 'react';

const Greetings = ({lang, children}) => {
    return (
        <div className='card mt-2 border-dark text-start'>
            <h2 className='ms-2'>
            {lang === "es" && "Hola "}
            {lang === "fr" && "Bonjour "}
            {lang === "de" && "Hallo "}
            {lang === "en" && "Hi "}
            {children}
            </h2>
        </div>
    );
};

export default Greetings;


