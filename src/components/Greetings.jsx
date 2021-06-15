import React from 'react';

const IdCard = ({lang,children}) => (
    <div className="greeting">
        <span>{greeting(lang)} </span><span>{children}</span>
    </div>
)

function greeting(lang) {
    switch (lang) {
        case "de":
            return "Hallo";
        case "es":
            return "Hola";
        case "fr":
            return "Bonjour";
        default:
            return "Hello";
    }
}

export default IdCard;