import React from 'react'

function Greetings(props) {
    const { lang, children} = props;


    if (lang === "de") {
        return (<p>Hallöchen {children}!</p>)
    } else if (lang === "en") {
        return (<p>Well met, {children}!</p>)
    } else if (lang === "es") {
        return (<p>{children}! Salsa Tequilla Corazon, muy bueno!</p>)
    } else if (lang === "fr") {
        return (<p>Bonjour {children}!</p>);
    } else {
        return (<p>{children}: Area 51 was here!</p>);
    }
}

export default Greetings