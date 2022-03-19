import React from "react";

const Greeting = ({ lang, children }) => {
    return (
        <div>
            {lang === "de" && 'Hallo, '}
            {lang === "en" && 'Hi, '}
            {lang === "es" && 'Hola, '}
            {lang === "fr" && 'Salut, '}
            {children}
        </div>
    )
}
export default Greeting;