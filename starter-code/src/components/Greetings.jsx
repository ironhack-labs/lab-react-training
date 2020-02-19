import React from "react";

const Greetings = (props) => {
    const languages = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    };

    return (
        <div class="box">{languages[props.lang]} {props.children}</div>
    );
};

export default Greetings;