import React from 'react';


function Greetings (props) {
    const msg = {
        de: 'Hallo',
        fr: 'Bonjour'
    }
    return (
        <div className="Greetings">
            {msg[props.lang]} {props.children}
        </div>
    )
}


export default Greetings