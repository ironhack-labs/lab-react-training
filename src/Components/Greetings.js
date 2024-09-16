import React from "react";

let Greetings = ({lang, children}) => {
        if (lang == "fr") {
            return <p>Bonjour {children}</p>
        } else if (lang =="es") {
            return <p>Holla {children}</p>
        } else if (lang =="pt") {
            return <p>Olá {children}</p>
        } else if (lang == "en") {
            return <p>Hello {children}</p>
        }
}

export default Greetings