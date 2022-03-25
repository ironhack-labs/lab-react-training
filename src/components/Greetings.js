import React from "react";

const Greetings = (props) => {
    const { lang, children: name} = props;
    let hello;
    // eslint-disable-next-line default-case
    switch (lang) {
        case "de":
            hello = "Hallo";
            break;
        case "en":
            hello = "Hello";
            break;
        case "es":
            hello = "Hola";
            break;
        case "fr":
            hello = "Bonjour";
            break;
    }
    return (
        <div>
            <h1>{hello} {name}</h1>
        </div>
    );
};

export default Greetings;