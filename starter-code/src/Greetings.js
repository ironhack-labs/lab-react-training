import React from 'react';

const Greetings = (props) => {
    switch (props.lang) {
        case "de":
            return (
                <div><p>hallo {props.children}</p>
                </div>
            );
        case "en":
            return (
                <div><p>hello {props.children}</p>
                </div>
            );
        case "fr":
            return (
                <div><p>bonjour {props.children}</p>
                </div>
            );
        case "es":
            return (
                <div><p>hola {props.children}</p>
                </div>
            );
        default:
            console.log("no lang props passed");
    }
}




export default Greetings;