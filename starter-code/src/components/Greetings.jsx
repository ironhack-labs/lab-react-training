import React from "react";

const Greetings = (props) => {
    const languages = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    };

    return (
        <div className="box">{languages[props.lang]} {props.children}</div>
    );
};

export default Greetings;