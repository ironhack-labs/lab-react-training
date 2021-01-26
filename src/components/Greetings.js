import React from 'react';

const Greetings = props => {
    let greeting = '';
    
    if (props.lang === "de"){
        greeting += "Hallo ";
    }

    if (props.lang === "en"){
        greeting += "Hello ";
    }

    if (props.lang === "es"){
        greeting += "Hola ";
    }

    if (props.lang === "fr"){
        greeting += "Bonjour ";
    }

    
    return(
    <div className="box">
        <div className="box-text">
            <p>{greeting}{props.children}</p>
        </div>
    </div>
    );
}

export default Greetings;