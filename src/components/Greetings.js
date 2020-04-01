import React from 'react'

const Greetings = props => {
    let saludo = "";
    switch (props.lang) {
        case "en":
            saludo = "Hello";
            break;
        case "es":
            saludo = "Hola";
            break;
        case "fr":
            saludo = "Bonjour";
            break;
        case "de":
            saludo = "Hallo";
            break;
    }

    return (
        <div>
            <p className="border-class">{saludo}, {props.children}</p>

        </div>
    )
}
export default Greetings;