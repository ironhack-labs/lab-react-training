import React from 'react';

const Greetings = ({lang, children}) => {
    return (
        <div>
            <h2>
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