import React from 'react';

const Greetings = props => {
    return (
        <div className = "box">
            <div>
                    {
                    props.lang == "fr" ? 
                        <p>Bonjour  {props.children}</p>
                        :
                        props.lang == "de" ?
                        <p>Hallo  {props.children}</p>
                        :
                        props.lang == "es" ?
                        <p>Hola  {props.children}</p>
                        :
                        <p>Hello  {props.children}</p>
                    }
            </div>
        </div>
    )
}

export default Greetings;