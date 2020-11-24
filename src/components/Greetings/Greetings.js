import React from "react";

const Greetings = (props) => {
    
    let welcoming ="";

    switch (props.lang){
        case 'de':
            welcoming = 'Hallo';
            break;
        case 'en':
            welcoming = 'Hello';
            break;
        case 'es':
            welcoming = 'Hola';
            break;
        case 'fr':
            welcoming = 'Bonjour';
    };

return (<div className="Greetings-container">
    <p>{welcoming} {props.children}</p>
</div>)
};

export default Greetings;