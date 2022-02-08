import React from "react";
import './Greeting.css';

const Greeting = (props) => {
    const {lang, children} = props;

    let message = ''
    if(lang ==="de") message = "Hallo"
    if(lang ==="en") message = "Hello"
    if(lang ==="es") message = "Hola"
    if(lang ==="fr") message = "Bonjour"

    return (
        <div className="Greeting">
            <p>{message} {children}</p>
        </div>
    )
}





export default Greeting;