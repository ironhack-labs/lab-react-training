import React from 'react';

const Greetings = (props) => {
    const translator = (lang) => {
        switch(lang) {
            case "de":
                return "Hallo";
            case "en":
                return "Hello";
            case "es":
                return "Hola";
            case "fr":
                return "Bonjour";
        }
    };
    return (
        <div className="border">
            {translator(props.lang)} {props.children}
        </div>
    );
}

export default Greetings;